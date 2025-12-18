


# 数院指北贡献者说

*数院指北编辑组*


很开心大家能够加入进来，我们在做的事儿是改变数院的历史。

## 背景
在过去，我们数学学院的很多门课的作业没有答案供参考，学生们需要自行查找资料，有的题可能也就将就一下，不了了之。现在，有了我们的贡献，会为咱数院的学生们提供一个参考，使学习变得更顺利。

## 目标
我再说一遍大家的目标

1. 收集一份完整且正确的答案，使用Latex编写，这也是我们要求大家两人一组工作的原因。
2. 在新学期开始前，向下一届的学生推广我们的网站，并找到负责下一届数分A高代A一组的学弟学妹来完成答案的整理。

## 团队合作
以两人或更多人一组进行工作，主要是为了

1. 保证答案的正确率，彼此之间核对答案能增加正确率，或者一题有可能有多种解法。
2. 便于共同编辑Latex，更方便。

关于共同编辑Latex的事情Overleaf上解决得很好，免费版账户能够两人共同编辑一份Latex文档。具体操作是注册好overleaf后点击右上角Share输入搭档的邮箱就可以两人共同编辑了。

其中我推荐使用的模板是ElegantPaper，直接在Overleaf模板处搜索就可以了。

我鼓励大家用Latex的原因在于，用Latex编辑后易于修改，易于后来者加入。如果后来者加入，并且答案变动不会特别大的话，需要做的工作会容易一些。

另外，Latex是理工科学习生活中必备的工具，在使用这个工具的过程中，大家也会有收获很多。

## 魔法环境，ChatGPT与MSE

我觉得对大家很重要的技能是魔法环境，ChatGPT和MSE（[mathstackexchange.com](https://math.stackexchange.com)）。一般来说，后面两个都依赖魔法环境。

### 魔法环境
魔法环境的话由于普遍要收费，应该很多人都拥有了。如果没有的人多我们也可以一起开通一个企业版，800元可以10个人同时在线。对咱十三人甚至更多也够用了。

### ChatGPT

ChatGPT可以让你更愉快地使用Latex，你输入自然语言，它可以给你输出Latex公式，格式等问题也一应俱全。

例如：请给我输出Latex代码形式：x的三次方分之sinx

``` latex
\frac{\sin{x}}{x^{3}}
```


$$\frac{\sin{x}}{x^{3}}$$

以下是一些不用魔法环境的ChatGPT的链接以及使用指南，前三个是链接，后两个是使用指南。

- [site.easychat.work](https://site.easychat.work)
- [3z291.aitianhu.ren](https://3z291.aitianhu.ren/#/chat/1002)
- [chat.waixingyun.cn](https://chat.waixingyun.cn/#/chat/gpt/1002)
- [learnprompting.org/zh-Hans/docs/basic_applications/writing_emails](https://learnprompting.org/zh-Hans/docs/basic_applications/writing_emails)
- [bfjurnlci1.feishu.cn/docx/CwTUdT4djo6jCHxbAzGc7U3wnrg?login_redirect_times=1](https://bfjurnlci1.feishu.cn/docx/CwTUdT4djo6jCHxbAzGc7U3wnrg?login_redirect_times=1)

### MSE
MSE（[mathstackexchange.com](https://mathstackexchange.com)）是一个数学问答平台，很多题目你能在上面找到答案，你也可以用Latex提问，很多能人会帮你答疑。


## Markdown 简介

大家以后需要用Markdown编辑内容。

可以阅读[了不起的Markdown](https://zhouyi-xiaoxiao.github.io/my-math-notes/PDFs/了不起的Markdown.pdf)来了解。语法很简单啦，你看我写的这些。

## 更新pdf和zlib

我创建了新的网站，但pdf文件都还在原来的仓库，我也懒得挪了，大家去看原来的[仓库](https://github.com/zhouyi-xiaoxiao/my-math-notes)吧哈哈哈。

另外，zlib是找电子书最重要的途径之一，大家一定得会。谷歌上搜索即可。搜索zlib。

## 用python解决遇到的问题
我在资料的收集整理时遇到了许多问题，在这里跟大家分享经历和解决方法。由于我用的是MacOS，所以可能有些许不适用某些情况的地方，大家稍加改正也可以用。

### 资料链接

由于网络环境访问不了GitHub仓库文件，所以我才去了一个折中的方法我采取了jsdelivr的分发方式，链接格式为:
```  
https://cdn.jsdelivr.net/gh/zhouyi-xiaoxiao/tju-math-guide/pdfs/文件名
```

但是这个格式的问题在于文件大小不能超过20MB，所以我才用了压缩pdf的方式来传输文件。一般我们要传输的文件是纯图形式就可以运用下面的方法。

### 转化为纯图pdf

有时候我们需要纯图pdf方便压缩，比如有时候是图片和矢量文字混合的形式，或者说是goodnote，notability等软件导出的形式有可能文件超过了20MB

用以下代码

``` py linenums="1"
import os
import tempfile
from fpdf import FPDF
from pdf2image import convert_from_path

def pdf_to_image_pdf(pdf_path, output_pdf_path):
    # Convert pages to images
    images = convert_from_path(pdf_path)

    # Create a new PDF
    pdf = FPDF(unit="pt", format="A4")

    for image in images:
        # Convert image size to A4
        a4_width_pt = 595.28  # A4 width in points
        a4_height_pt = 841.89  # A4 height in points
        aspect_ratio = image.width / image.height
        if aspect_ratio > 1:
            img_width_pt = a4_width_pt
            img_height_pt = a4_width_pt / aspect_ratio
        else:
            img_height_pt = a4_height_pt
            img_width_pt = a4_height_pt * aspect_ratio

        # Add a page to PDF
        pdf.add_page()

        # Save image to a temporary file
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as f:
            temp_filename = f.name
        image.save(temp_filename, format='JPEG')

        # Add image to PDF
        pdf.image(temp_filename, x=0, y=0, w=img_width_pt, h=img_height_pt)

        # Remove temporary file
        os.remove(temp_filename)

    # Save the PDF
    pdf.output(output_pdf_path)

pdf_path = "/Users/jiyouhai/Desktop/概率论习题及答案.pdf"
output_pdf_path = "/Users/jiyouhai/Desktop/概率论习题及答案_output.pdf"
pdf_to_image_pdf(pdf_path, output_pdf_path)

```

### 压缩pdf

我是用python来压缩pdf，代码如下：

``` py linenums="1"
import os
import fitz
from PIL import Image
import io
import img2pdf

def compress_pdf(input_file_path, output_file_path, quality):
    doc = fitz.open(input_file_path)
    image_list = []

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        pix = page.get_pixmap()
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        byte_arr = io.BytesIO()
        img.save(byte_arr, format='JPEG', quality=quality)
        byte_arr = byte_arr.getvalue()
        image_list.append(byte_arr)
    
    doc.close()

    pdf_bytes = img2pdf.convert(image_list)
    with open(output_file_path, 'wb') as f:
        f.write(pdf_bytes)

# 输入文件路径，改成你的路径
input_file_path = '/Users/jiyouhai/Desktop/应用多元统计分析.pdf'
# 输出文件路径，改成你的路径
output_file_path = '/Users/jiyouhai/Desktop/应用多元统计分析_compressed.pdf'
# 图像质量（1-95，95为最高质量）
quality = 70
# 调用函数进行压缩
compress_pdf(input_file_path, output_file_path, quality)

```

### 图片转pdf

有时候会遇到将大量图片转化为pdf的情况，当然转化过后如果仍然过大就用上面的方法来压缩。举个例子，我是苹果手机，直接保存的格式一般是heic或者HEIC，所以我们首先在终端中输入：

```bash
cd /Users/jiyouhai/Desktop/高代b答案/六点一到六点三
mkdir -p jpegs
for file in *.heic *.HEIC; do
    sips -s format jpeg "$file" --out "jpegs/$(basename "$file" .${file##*.}).jpg"
done
rm -rf jpegs
mkdir -p jpegs
for file in *.HEIC; do convert "$file" "jpegs/$(basename "$file" .HEIC).jpg"; done
```

这段脚本的作用是将指定目录（在此例中是 /Users/jiyouhai/Desktop/高代b答案/六点一到六点三）下的所有.heic 和 .HEIC 格式的图片转换为 .jpg 格式的图片，并将转换后的图片存放到名为 jpegs 的目录下.

之后用python代码将jpg格式的图片合并成一个pdf

``` py linenums="1"
import os
import re  # <- Add this line
from PIL import Image
import glob

def atoi(text):
    return int(text) if text.isdigit() else text

def natural_keys(text):
    '''
    alist.sort(key=natural_keys) sorts in human order
    http://nedbatchelder.com/blog/200712/human_sorting.html
    '''
    return [ atoi(c) for c in re.split(r'(\d+)', text) ]

jpeg_folder = '/Users/jiyouhai/Desktop/未命名文件夹/'
jpeg_files = glob.glob(jpeg_folder + '*.jpeg')
jpeg_files.sort(key=natural_keys)  # Use natural_keys function for sorting

img_list = []
for filename in jpeg_files:
    img_list.append(Image.open(filename))

img_list[0].save("/Users/jiyouhai/Desktop/answer5.pdf", "PDF" ,resolution=100.0, save_all=True, append_images=img_list[1:])

```

### 合并pdf

有时候会遇到多个pdf的情况，下面这个python脚本提取出数字然后以数字从小到大合并pdf

``` py linenums="1"
from PyPDF2 import PdfMerger
import os
import re

# 定义要合并的PDF文件所在的文件夹路径
folder_path = "/Users/jiyouhai/Desktop/未命名文件夹"

# 定义目标文件夹和文件名
output_folder = "/Users/jiyouhai/Desktop/"
output_filename = "数理统计PPT.pdf"

# 创建一个PDF合并器对象
merger = PdfMerger()

# 获取文件夹中所有的PDF文件
pdf_files = [f for f in os.listdir(folder_path) if f.endswith(".pdf")]

# 定义一个函数来从文件名中提取数字
def extract_number(filename):
    match = re.search(r'\d+', filename)
    if match:
        return int(match.group())
    else:
        return float('inf')  # 未匹配到数字的文件将会被排到最后

# 使用自定义的函数对文件名进行排序
pdf_files.sort(key=extract_number)

# 遍历排序后的所有PDF文件
for filename in pdf_files:
    file_path = os.path.join(folder_path, filename)
        
    # 将当前PDF文件添加到合并器中
    merger.append(file_path)

# 保存合并后的PDF文件
output_path = os.path.join(output_folder, output_filename)
merger.write(output_path)
merger.close()

print("合并完成！")
```




### 裁剪pdf

孙笑涛抽象代数这本书是我手动扫描的，但是最初的版本是上下都是空白，只用中间有扫描出来的图片。所以我利用python代码先提取了图片的格式，然后将空白部分剪裁掉。

提取格式的代码：
``` py linenums="1"
import fitz
import io
from PIL import Image

doc = fitz.open('/Users/jiyouhai/Desktop/曾红刚复变函数答案助教版.pdf')

page = doc[0] # Assuming the image is on the first page

img_index = 0 # Assuming the image is the first image
img = page.get_images(full=True)[img_index]

xref = img[0]
base = fitz.Pixmap(doc, xref)
if base.n > 4:  # CMYK: convert to RGB first
    pix = fitz.Pixmap(fitz.csRGB, base)
else:
    pix = base

# Save it in memory
imgdata = io.BytesIO(pix.tobytes())

img_obj = Image.open(imgdata)

# Print out some information
print(img_obj.format)
print(img_obj.mode)

```

提取完成之后剪裁：

``` py linenums="1"
import fitz
import io
import numpy as np
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A3, A4, A5, landscape
import os
import tempfile

def crop_pdf(input_file_path, output_file_path):
    doc = fitz.open(input_file_path)
    pagesize = A4
    # Create a new canvas for the output PDF
    c = canvas.Canvas(output_file_path, pagesize=pagesize)

    # Create a list to hold the temporary image files
    temp_files = []

    for i in range(len(doc)):
        page = doc[i]
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base = fitz.Pixmap(doc, xref)
            if base.n == 1:  # Grayscale
                mode = "L"
            elif base.n > 4:  # CMYK: convert to RGB
                base = fitz.Pixmap(fitz.csRGB, base)
                mode = "RGB"
            else:
                continue

            pil_img = Image.frombytes(mode, [base.width, base.height], base.samples)
            np_array = np.array(pil_img)
            non_white_pixels = np.where(np_array != 255)  # For grayscale image

            if non_white_pixels[0].size == 0:  # Check if the image is not empty
                print(f"Skipping empty image on page {i}, image {img_index}")
                continue

            y1, y2 = non_white_pixels[0].min(), non_white_pixels[0].max()
            x1, x2 = non_white_pixels[1].min(), non_white_pixels[1].max()
            cropped_img = pil_img.crop((x1, y1, x2, y2))

            # Create a temporary file to save the cropped image
            with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as f:
                cropped_img.save(f, format='JPEG')
                temp_files.append(f.name)

            # Draw the image on the canvas
            c.drawImage(f.name, 0, 0, pagesize[0], pagesize[1])

            # Go to the next page
            c.showPage()

    # Save the PDF
    c.save()

    # Delete the temporary image files
    for file in temp_files:
        os.remove(file)

input_file_path = '/Users/jiyouhai/Desktop/常微分方程作业答案.pdf'
output_file_path = '/Users/jiyouhai/Desktop/常微分方程作业答案_cropped.pdf'

crop_pdf(input_file_path, output_file_path)

```

### word转pdf

有时候你会遇到需要把很多很多个word文档转化pdf的情况，以下脚本需要保证你的电脑安装的有word。当然如果你需要转换完之后合并pdf，参考前面。

``` py linenums="1"
from docx2pdf import convert
import os

# 定义要转换的Word文档所在的文件夹路径
folder_path = "/Users/jiyouhai/Desktop/常微分方程作业答案_副本"
# 定义目标文件夹路径用于保存生成的PDF文件
output_folder = "/Users/jiyouhai/Desktop/常微分方程作业答案_副本"

# 遍历文件夹中的所有Word文档
for filename in os.listdir(folder_path):
    if filename.endswith(".docx") or filename.endswith(".doc"):  # 确保只处理Word文档文件
        file_path = os.path.join(folder_path, filename)
        
        # 将Word文档转换为PDF格式
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".pdf")
        convert(file_path, output_path)

print("转换完成！")

```

### 网页提取pdf
有时候还会遇到在网页上提取pdf的情况，所以说下面的脚本能将网页中所有图片提取出来然后合并成一个pdf文档发送到你的邮箱。

``` py linenums="1"

import requests
from bs4 import BeautifulSoup
import img2pdf
from PIL import Image
import io
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

# 定义需要爬取的链接列表
urls = [
    'https://zhuanlan.zhihu.com/p/544364116',
    'https://zhuanlan.zhihu.com/p/544370164',
    'https://zhuanlan.zhihu.com/p/544371964',
    'https://zhuanlan.zhihu.com/p/596106667',
    'https://zhuanlan.zhihu.com/p/596107927',
    'https://zhuanlan.zhihu.com/p/596109115'
]

# 创建会话
s = requests.Session()
# 设置重试策略
retries = Retry(total=5, backoff_factor=1, status_forcelist=[ 502, 503, 504 ])
s.mount('http://', HTTPAdapter(max_retries=retries))
s.mount('https://', HTTPAdapter(max_retries=retries))

# 添加请求头，模拟桌面浏览器
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

img_data = []

for url in urls:
    response = s.get(url)
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    img_tags = soup.find_all('img')
    img_urls = []
    for img in img_tags:
        try:
            img_urls.append(img['data-original'])
        except KeyError:
            continue

    for img_url in img_urls:
        if img_url.startswith("data:"):
            print(f"Skipping data URL: {img_url}")
            continue
        try:
            response = s.get(img_url, stream=True, headers=headers)
            response.raise_for_status()
            img = Image.open(io.BytesIO(response.content))
            img = img.convert("RGB")
            img_byte_arr = io.BytesIO()
            img.save(img_byte_arr, format='JPEG')
            img_byte_arr = img_byte_arr.getvalue()
            img_data.append(img_byte_arr)
        except Exception as e:
            print(f"Error downloading {img_url}: {e}")

    print(f"Downloaded {len(img_data)} images.")  # 在此添加代码

# Convert all images to a PDF
with open("output.pdf", "wb") as f:
    f.write(img2pdf.convert(img_data))

# send email
from_email = "jiyouhai_55@tju.edu.cn"
to_email = "jiyouhai_55@tju.edu.cn"
password = "你的密码"

msg = MIMEMultipart()
msg['From'] = from_email
msg['To'] = to_email
msg['Subject'] = "PDF from Zhihu"

with open("output.pdf", "rb") as f:
    attach = MIMEBase('application', 'octet-stream')
    attach.set_payload(f.read())
    encoders.encode_base64(attach)
    attach.add_header('Content-Disposition', 'attachment', filename=str("output.pdf"))
    msg.attach(attach)

server = smtplib.SMTP('smtp.tju.edu.cn', 25) #这个是天津大学邮箱的服务器，如果你用的其他邮箱，你可以用相应服务器。
server.starttls()
server.login(from_email, password)
text = msg.as_string()
server.sendmail(from_email, to_email, text)
server.quit()

```

### 总结

以上是我遇到的全部问题，我其实并不会python，只是会用ChatGPT炼丹而已，所以我能解决大家也没问题。

## 贡献者名单
下学期各科目的贡献者如下：

- 抽象代数：赵元文、赵登妤、赵友诚
- 概率论：曲宸瑶、杨雅玟
- 数分（求是）：何予舟、赵友城
- 常微分（求是）：易柯妍、刘光磊
- 数分：刘炜娜、潘少强
- 常微分：朱彦、高鹏霄

我们很高兴能够一起改变历史，我们都是数院的普罗米修斯 :fire:

