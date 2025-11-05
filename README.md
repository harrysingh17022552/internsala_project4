## TO-DO List : React Assignment - Module 3

## Project setup
1. unzip file.
2. folder don't contain node modules, so just run,
   npm install
   command
3. After successful installation start server using command
   npm run dev



# PRoject Requirement
1. Done : project is created using Vite and application runs without any error.

2. Created 4 main component and 3 dummy component
   2/4 is in src folder Header and App
   2/4 is in src/component folder.
   (optional )Dummy Component are just created for routing purpose

3. Hooks used here are :
   useState to manage stats like user, list, and other imp. stats.
   useEffect is used when there is any change in list it will update list in local storage, so that whenever you refresh page the todo list don't flush.
   One of the props is shared from App to ToDOList Component and most of the props are shared parent to its children

4. In ToDoList component each list item is mapped using map function with unique key.

5. Handler used
   handleDelete : to delete item from the list.
   handleEdit,handleEditItem : this handles both edit and add functionality, both are separated with ternary operator.
   handleMarking : this handles the status of the todo list item to make them complete.

6. Designed is light weighted, just kept designed simple and user-friendly.
   Used tailwind css to style the website.




Links :
## Github Repository Link = https://github.com/harrysingh17022552/internsala_project4
## Project depolyment Link = https://todolist-lyart-eight-94.vercel.app/
