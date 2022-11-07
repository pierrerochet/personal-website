"use strict";(self.webpackChunkdemoproj=self.webpackChunkdemoproj||[]).push([[925],{5348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>b,toc:()=>N});var n=a(7462),r=a(7294),l=a(3905),i=(a(1262),a(9583));function o(e){let{url:t}=e;return r.createElement("span",{className:""},r.createElement("a",{href:t,className:"inline-flex justify-items-center"},r.createElement("span",null,"GitHub"),r.createElement(i.hJX,{size:"24",className:"ml-2"})))}var s=a(8193),p=a(4793),m=a(9669),d=a.n(m);const u="https://ml-spam-filter-fr-app.herokuapp.com/check_email";const c=function(){const[e,t]=(0,r.useState)({text:"On se retrouve \xe0 14h pour la r\xe9union avec nos partenaires",strength:5});function a(a){const n=a.target.value;t({...e,[a.target.name]:n})}return(0,r.useEffect)((()=>{})),r.createElement("div",{className:""},r.createElement("form",{className:"mb-8",onSubmit:function(a){t({...e,resp:null,isLoading:!0}),d().post(u,{text:e.text,strength:e.strength}).then((a=>{t({...e,resp:a.data,isLoading:!1})})),a.preventDefault()}},r.createElement("div",{className:"mb-4"},r.createElement("div",{className:"flex justify-between"},r.createElement("label",{className:"block"},"text"),r.createElement("select",{onChange:function(a){const n=a.target.value;t({...e,text:n,isLoading:!1})},className:"p-1 bg-transparent border-x-2 border-t-2 border-b-0 rounded-t-sm border-solid"},r.createElement("option",{value:"On se retrouve \xe0 14h pour la r\xe9union avec nos partenaires"},"Example legit"),r.createElement("option",{value:"Vous avez gagn\xe9 un cadeau, cliquez ici pour le recevoir !"},"Example spam"))),r.createElement("textarea",{name:"text",className:"border-2 border-solid rounded-sm rounded-tr-none w-full h-32 px-1 resize-none font-sans m-0",placeholder:"Type the content of an email ...",value:e.text,onChange:a})),r.createElement("div",{className:"mb-4"},r.createElement("label",{htmlFor:"strength",className:"block"},"strength"),r.createElement("input",{className:"border-2 rounded-sm w-20 border-solid",name:"strength",type:"number",step:"0.1",min:"0",max:"10",value:e.strength,onChange:a})),!e.isLoading&&r.createElement("button",{type:"submit",className:"button button--outline button--active button--primary"},"Run"),e.isLoading&&r.createElement(p.rj,{height:"36",width:"76",color:"gray",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"mb-4",visible:!0})),e.resp&&r.createElement("div",null,r.createElement("div",{className:"p-2"},!e.resp.is_spam&&r.createElement("span",{className:"mb-3 inline-flex items-center text-green-700"},r.createElement(s.KP3,{size:"20",className:""}),r.createElement("span",{className:"ml-2"},"This seems to be ",r.createElement("span",{className:"font-bold"},"legit")," !")),e.resp.is_spam&&r.createElement("span",{className:"mb-3 inline-flex items-center text-red-700"},r.createElement(s.SR5,{size:"20",className:""}),r.createElement("span",{className:"ml-2"},"This seems to be ",r.createElement("span",{className:"font-bold"},"spam")," !")),r.createElement("pre",null,JSON.stringify(e.resp,null,4)))))},h={toc:[{value:"\ud83d\udd25 Objective and motivation",id:"-objective-and-motivation",level:2},{value:"\ud83d\udcda Tools and knowledge",id:"-tools-and-knowledge",level:2},{value:"\ud83d\udee0 Tools",id:"-tools",level:3},{value:"\ud83d\udcd6 Knowledge",id:"-knowledge",level:3},{value:"\ud83e\udde9 Project structure",id:"-project-structure",level:2},{value:"\ud83d\udddd How use it",id:"-how-use-it",level:2},{value:"\u26f0 Install dependencies",id:"-install-dependencies",level:3},{value:"\ud83d\ude80 Start the API",id:"-start-the-api",level:3},{value:"\u2728 Request example",id:"-request-example",level:3},{value:"\ud83d\udc8e Data used in the project",id:"-data-used-in-the-project",level:2},{value:"\ud83d\udcc8 Performances",id:"-performances",level:2},{value:"\ud83d\udca1 Choices made in the project",id:"-choices-made-in-the-project",level:2},{value:"\ud83d\udc49 Why a spam filter for French language ? \ud83c\uddeb\ud83c\uddf7",id:"-why-a-spam-filter-for-french-language--",level:3},{value:"\ud83d\udc49 Why use a linear SVM and Stochastic Descent Gradient for model training ?",id:"-why-use-a-linear-svm-and-stochastic-descent-gradient-for-model-training-",level:3},{value:"\ud83d\udc49 Why do a probability calibration ?",id:"-why-do-a-probability-calibration-",level:3},{value:"\ud83d\udc49 Why use FastAPI to build the API ?",id:"-why-use-fastapi-to-build-the-api-",level:3},{value:"\ud83e\ude84 How to improve the project ?",id:"-how-to-improve-the-project-",level:2},{value:"Author",id:"author",level:3}]};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spam-filter-with-machine-learning"},"Spam filter with machine learning"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://raw.githubusercontent.com/pierrerochet/ml-spam-filter-fr/master/assets/email.png",alt:"email"}),(0,l.kt)("figcaption",{align:"center"},(0,l.kt)("i",null,"Image by ",(0,l.kt)("a",{href:"https://pixabay.com/fr/users/tumisu-148124/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2362038"},"Tumisu")))),(0,l.kt)("h2",{id:"-objective-and-motivation"},"\ud83d\udd25 Objective and motivation"),(0,l.kt)("p",null,"Build a ",(0,l.kt)("strong",{parentName:"p"},"spam filter")," with ",(0,l.kt)("strong",{parentName:"p"},"machine learning")," for ",(0,l.kt)("strong",{parentName:"p"},"french"),"."),(0,l.kt)("p",null,"The fight against spamming is both one of the oldest computer security problems and one that has been successfully solved through machine learning."),(0,l.kt)("p",null,"Envisionning and building such a system is a rewarding experience for those interested in applying machine learning to computer security. This project is therefore mainly for ",(0,l.kt)("strong",{parentName:"p"},"educational purpose"),"."),(0,l.kt)("h2",{id:"-tools-and-knowledge"},"\ud83d\udcda Tools and knowledge"),(0,l.kt)("h3",{id:"-tools"},"\ud83d\udee0 Tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/"},"Sklearn")," - A python library for traditionnal machine-learning"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/"},"FastAPI")," - A python micro framework to quickly build APIs")),(0,l.kt)("h3",{id:"-knowledge"},"\ud83d\udcd6 Knowledge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python development skill"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tf%E2%80%93idf"},"TF-IDF")," for text vectorization"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Support_vector_machine"},"Linear Support vector machine")," and ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stochastic_gradient_descent"},"Stochastic Gradient Descent")," for model training"),(0,l.kt)("li",{parentName:"ul"},"API development to serve the model")),(0,l.kt)("h2",{id:"-project-structure"},"\ud83e\udde9 Project structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 Procfile\n\u2502   \u251c\u2500\u2500 main.py\n\u2502   \u251c\u2500\u2500 ml_models\n\u2502   \u2502   \u2514\u2500\u2500 spam-filter-latest\n\u2502   \u2502       \u2514\u2500\u2500 model.pkl\n\u2502   \u251c\u2500\u2500 models.py\n\u2502   \u251c\u2500\u2500 requirements.txt\n\u2502   \u251c\u2500\u2500 runtime.txt\n\u2502   \u251c\u2500\u2500 test_main.py\n\u2502   \u2514\u2500\u2500 utils.py\n\u251c\u2500\u2500 assets\n\u2502   \u2514\u2500\u2500 email.png\n\u251c\u2500\u2500 data\n\u2502   \u2514\u2500\u2500 data-en-hi-de-fr.csv\n\u251c\u2500\u2500 notebooks\n\u2502   \u2514\u2500\u2500 build-model.ipynb\n\u2514\u2500\u2500 requirements.txt\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Folder"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app"),(0,l.kt)("td",{parentName:"tr",align:null},"api source code for deployment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ml_models"),(0,l.kt)("td",{parentName:"tr",align:null},"machine-learning models trained and loaded when the application starts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"data used during training")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notebooks"),(0,l.kt)("td",{parentName:"tr",align:null},"contains the notebooks for data manipulation and model training")))),(0,l.kt)("h2",{id:"-how-use-it"},"\ud83d\udddd How use it"),(0,l.kt)("h3",{id:"-install-dependencies"},"\u26f0 Install dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,l.kt)("p",null,"Note - We recommend doing this in a vitual environment."),(0,l.kt)("h3",{id:"-start-the-api"},"\ud83d\ude80 Start the API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn app.main:app\n")),(0,l.kt)("p",null,"The documentation can be found at this url ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/docs"},"http://127.0.0.1:8000/docs")),(0,l.kt)("h3",{id:"-request-example"},"\u2728 Request example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n  'http://127.0.0.1:8000/verify' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"text\": \"Vous avez gagn\xe9 un cadeau ! Recevez votre gain en cliquant ici !\"\n}'\n")),(0,l.kt)("p",null,"will return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_spam": true,\n  "strength": 5.0,\n  "confidence": 0.921,\n  "input_text": "Vous avez gagn\xe9 un cadeau ! Recevez votre gain en cliquant ici !",\n  "time": "2022-10-26 17:07:04"\n}\n')),(0,l.kt)("h2",{id:"-data-used-in-the-project"},"\ud83d\udc8e Data used in the project"),(0,l.kt)("p",null,"You can dowload the spam data on ",(0,l.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/rajnathpatel/multilingual-spam-data?resource=download"},"Kaggle"),(0,l.kt)("br",{parentName:"p"}),"\n","Author - ",(0,l.kt)("a",{parentName:"p",href:"https://www.kaggle.com/rajnathpatel"},"Raj Nath Patel")),(0,l.kt)("p",null,"These are 5134 French text from emails, split into 3593 for training and 1541 for testing (30 %)."),(0,l.kt)("p",null,"The original text was in English and Machine Translated to French. The dataset therefore contains some inconsistencies in meaning due to translation errors."),(0,l.kt)("p",null,"The data only provides the body of the email in raw text, which means that we do not have the sender email address or any other metadata."),(0,l.kt)("p",null,"Below an example:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\"En tant que client appr\xe9ci\xe9, je suis heureux de vous informer qu'\xe0 la suite d'un r\xe9cent examen de votre Mob No. vous \xeates r\xe9compens\xe9 avec un Prix Bonus \xa31500, appelez 09066364589\"")),(0,l.kt)("h2",{id:"-performances"},"\ud83d\udcc8 Performances"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"precision"),(0,l.kt)("th",{parentName:"tr",align:null},"recall"),(0,l.kt)("th",{parentName:"tr",align:null},"f1-score"),(0,l.kt)("th",{parentName:"tr",align:null},"support"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ham"),(0,l.kt)("td",{parentName:"tr",align:null},"0.99"),(0,l.kt)("td",{parentName:"tr",align:null},"1.00"),(0,l.kt)("td",{parentName:"tr",align:null},"0.99"),(0,l.kt)("td",{parentName:"tr",align:null},"1349")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spam"),(0,l.kt)("td",{parentName:"tr",align:null},"0.98"),(0,l.kt)("td",{parentName:"tr",align:null},"0.91"),(0,l.kt)("td",{parentName:"tr",align:null},"0.94"),(0,l.kt)("td",{parentName:"tr",align:null},"192")))),(0,l.kt)("p",null,"Note - The ",(0,l.kt)("strong",{parentName:"p"},"test data is 30%")," of the total data."),(0,l.kt)("h2",{id:"-choices-made-in-the-project"},"\ud83d\udca1 Choices made in the project"),(0,l.kt)("p",null,"Here, we tried to respond to most frequently asked questions and justify choices made in the project."),(0,l.kt)("h3",{id:"-why-a-spam-filter-for-french-language--"},"\ud83d\udc49 Why a spam filter for French language ? \ud83c\uddeb\ud83c\uddf7"),(0,l.kt)("p",null,"Because French is a beautiful language \ud83d\ude09"),(0,l.kt)("h3",{id:"-why-use-a-linear-svm-and-stochastic-descent-gradient-for-model-training-"},"\ud83d\udc49 Why use a linear SVM and Stochastic Descent Gradient for model training ?"),(0,l.kt)("p",null,"Historically, Linear SVM performs well on large datasets for relatively fast training time. It is therefore particularly suitable for textual data."),(0,l.kt)("p",null,"We selected it for its good performance compared to the other algorithms we tested."),(0,l.kt)("p",null,"Using SGD for convergence allows us iterative learning. This strategy is useful for updating our model with new observations (see ",(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier.partial_fit"},"partial_fit"),")."),(0,l.kt)("p",null,"The performance is good enough not to consider heavier architecture based on neural networks. In addition, we have chosen to favor a light and easy to handle model."),(0,l.kt)("h3",{id:"-why-do-a-probability-calibration-"},"\ud83d\udc49 Why do a probability calibration ?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When performing classification you often want not only to predict the class label, but also obtain a probability of the respective label. This probability gives you some kind of confidence on the prediction. Some models can give you poor estimates of the class probabilities and some even do not support probability prediction (e.g., some instances of SGDClassifier). The calibration module allows you to better calibrate the probabilities of a given model, or to add support for probability prediction."),(0,l.kt)("p",{parentName:"blockquote"},"-- ",(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/calibration.html"},(0,l.kt)("em",{parentName:"a"},"Sklearn documentation")))),(0,l.kt)("p",null,"Although not required, we want a ",(0,l.kt)("strong",{parentName:"p"},"confidence score")," in order to ",(0,l.kt)("strong",{parentName:"p"},"manage the filter strength")," in the service."),(0,l.kt)("h3",{id:"-why-use-fastapi-to-build-the-api-"},"\ud83d\udc49 Why use FastAPI to build the API ?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints."),(0,l.kt)("p",{parentName:"blockquote"},"-- ",(0,l.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},(0,l.kt)("em",{parentName:"a"},"FastAPI Documentation")))),(0,l.kt)("p",null,"FastAPI is the python framework allowing to build API in the ",(0,l.kt)("strong",{parentName:"p"},"fastest")," manner."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Easy to learn, based on standard python type, and automatically generating the documentation")," are some of its many advantages."),(0,l.kt)("p",null,"For building ML service in python it has become a standard choice in many projects."),(0,l.kt)("h2",{id:"-how-to-improve-the-project-"},"\ud83e\ude84 How to improve the project ?"),(0,l.kt)("p",null,"First, the use of native French data could improve post-deployment spam detection."),(0,l.kt)("p",null,"Another good option would be to find email dataset with additional elements such as sender address, url, html code, attachments, etc. We believe that these elements would be instrumental in building very good features to discriminate against spam."),(0,l.kt)("p",null,"Depending on the data at our disposal, other algorithms would be required for training. For example, more complex methods based on neural networks should work better for inspecting attachements."),(0,l.kt)("p",null,"Combining these improvements could make a very powerful anti spam. But the project would also be much more difficult to develop."),(0,l.kt)("h3",{id:"author"},"Author"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/pierrerochet"},"Pierre ROCHET")))}k.isMDXComponent=!0;const g={title:"Spam filter"},f=void 0,b={unversionedId:"ml-spam-filter-fr",id:"ml-spam-filter-fr",title:"Spam filter",description:"\u2728 Try it",source:"@site/docs/ml-spam-filter-fr.mdx",sourceDirName:".",slug:"/ml-spam-filter-fr",permalink:"/personal-website/docs/ml-spam-filter-fr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ml-spam-filter-fr.mdx",tags:[],version:"current",frontMatter:{title:"Spam filter"},sidebar:"tutorialSidebar"},v={},N=[{value:"\u2728 Try it",id:"-try-it",level:2}],y={toc:N};function w(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"-try-it"},"\u2728 Try it"),(0,l.kt)(c,{mdxType:"SpamFilterDemo"}),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"All the documentation below comes directly from the project's Readme available on ",(0,l.kt)(o,{url:"https://github.com/pierrerochet/ml-spam-filter-fr",mdxType:"GithubLink"}))),(0,l.kt)(k,{mdxType:"Readme"}))}w.isMDXComponent=!0}}]);