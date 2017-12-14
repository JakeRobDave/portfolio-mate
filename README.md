# https://jakerobdave.github.io/portfolio-mate/
Final Project Gui

Portfolio Mate Manual 

Installation/Initialization instructions.
Portfolio Mate doesn’t need to be installed. Access the web app on any browser with internet at the base-page: http://weblab.cs.uml.edu/~ddacosta/final/main.html. 

Instructions
To use the website, the user must either sign in or check in as visitor at the main page: http://weblab.cs.uml.edu/~ddacosta/final/main.html, 


(1) Main Page 
On the Main Page the only interactable items are the two buttons; Master & Visitor. 

OnClick  Visitor:     
The user may choose to see the site as a visitor if they are not the photographer with Control access. Clicking on the visitor button bring you to the Landing Page where visitors can see the photographer’s work and share it.

OnClick Master Button:
As this project was built for a single user to control, Master is where the photographer client will log in. After clicking the button, a modal dialogue menu will come up. Currently. to use the software the user must type in “annFisher” for the username and “3dog” for the password because they’re hardcoded. The user can submit by pressing the enter key (not 100% reliable) or pressing submit, upon where they will be brought to the Editor Page for portfolio control.


(2) Landing Page
    In the Landing Page, visitors can see scroll through the Portfolio scrollview and click on pages to expand modals of them that display them in higher scale with an image title heading and buttons for the visitor to interact with, namely:
Tweet: An official Twitter API button will open up a tweet web intent for the visitor to share the portfolio. 
Share: An official Facebook Developer Tools button will open up a Facebook post window for the visitor to share the portfolio. 
Download: The download button downloads the image on display in the modal. 


(3) Editor Page: 
From inside the editor page, the user can click on any of the menu Sidebar options or the Images in the body area. 

Editor Page Sidebar:
    On the sidebar you’ll notice the buttons: 
Search: The Search button brings up a modal dialogue that asks the user to input an image they’re searching for. At current state, the web app doesn’t support search, ideally it will be for when the user’s catalogue is large enough that scrolling through becomes tedious. 
Edit Name: The Edit Name button brings up a modal dialogue that allows the user to input a name to change the Header name of their Portfolio. 
Add: An Add button brings up a Modal that allows the user to drag and drop files to be uploaded to the web app’s filesystem.
Sorts: The Sorts button is actually a drop down menu that allows the user to sort their catalogue by Alphabetical order, reverse, or size. 
View as User: The View as User button allows our photographer to skip to the landing page to see how their work will be presented to visitors. 

OnClick Editor Page Images:
    On an image click, the user will have a few buttons and inputs available to them.
Tweet: An official Twitter API button will open up a tweet web intent for the photographer to share her site. 
Share: An official Facebook Developer Tools button will open up a Facebook post window for the Photographer to share their work. 
Download: The download button downloads the image on display in the modal. 
Edit Picture: An edit Picture button sends the user to the Photo Editing page (4) for sharpening up whichever photo modal their clicking Edit Picture from. 
Delete: As a security feature, the web app requires the photographer to drag and drop th file they’re trying to delete before pressing the Delete button here. 


(4) Picture Edit Page
    On clicking the Edit Picture button from an image click modal; the user is brought to the Picture Edit page. On the Picture Edit page the user can change the Brightness, Contrast, RGB, Grayscale, Cropping, and Resolution of the image they chose to edit at the Editor page, with various sliders, buttons, and forms.
The Left column is Rotation, Cropping, and Resizing. 
The Center is the Image Canvas to be adjusted, sent from the Editor Page. Also:
Apply Edits button here downloads the image canvas
Upload button uploads the new image to the server file system for overwriting. 
The Right Column are the Brightness, Contrast, RGB JQuery UI Sliders.

    
