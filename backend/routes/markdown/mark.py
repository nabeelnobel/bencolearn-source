import markdown
from fastapi import APIRouter
import os
import datetime

mark = APIRouter()

class HeadingExtension(markdown.extensions.Extension):
    def extendMarkdown(self, md):
        md.treeprocessors.register(HeadingProcessor(md), 'heading', 1)

class HeadingProcessor(markdown.treeprocessors.Treeprocessor):
    def run(self, doc):
        for element in doc.iter():
            if element.tag.startswith('h'):
                element.set('class', 'title')

md = markdown.Markdown(extensions=[HeadingExtension()])


@mark.get("/content/{file_name}")
def get_content(file_name: str):

    with open(f"question/content/{file_name}.md", "r") as file:
        markdown_text = file.read()

    html = md.convert(markdown_text)

    creation_timestamp = os.path.getctime(f"question/content/{file_name}.md")
    creation_date = datetime.datetime.fromtimestamp(creation_timestamp).strftime("%Y-%m-%d")

    return {
        "date":str(creation_date),
        "html": html,
    }