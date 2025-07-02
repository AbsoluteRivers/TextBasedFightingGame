## Developer's Log

## Words Of Power - Text-based Fighting Game

---

## Devlog Entry #1 (Week 1)

### Progress: 
- Started User Interface preliminaries in HTML  

## Devlog Entry #2 (Week 2)

### Progress:
- Provided scripts for button interface  
- Utilized DOM manipulation for calling separate html using main menu button  
- Updated CSS file for stylesheet  
  *Note: CSS selectors don't need ";" as and end, only objects and parameters within the selectors*  
- Provided versus scene interface  
- Made main menu button function the same in both solo and versus scenes  
- Improved visibility for versus stats  
- Provided pop up choices on versus to identify which enemy to show visible  
- Added overlay on pop up window to prevent accidentally clicking outside of the window  
- Added scripts for events on button press, emits visibility of chosen enemy on pop up window  
- Provided buttons on versus page as well as added background image  
- Edited styles of status for better visibility  
- Provided scripts for versus buttons, no interactability yet  
*Bug: There was a problem with using the buttons as the event on click was not activating*  
*Fix: Used const to a variable that will be changed within the event. The const was prohibiting any other function from triggering*  
*Error: There was a problem with the function damage_calculator. It is not reading the variables properly*  
*Fix: Made variables global so the function can interact with the variables properly and not return null*  


## Devlog Entry #3 (Week 3)

### Progress:
- Fixed the functionality of js script for damage calculation  
- Provided events for buttons on win window  
- Improved visuals for victory window on versus page  
- Polished versus page with adaptable stats  
- Provided audio for versus scene with interactable button for play/pause  
- Finished with versus scene. Proceeding with story scene.  
- Progressed with scripting the base story sequence for story scene  
- Added styles for the buttons and paragraphs as well as added background for story scene  
- Provided events and functions for buttons in story scene  
- Finsihed basic work. Might add more story in the future  
//- Hosted a github page for the textgame//  