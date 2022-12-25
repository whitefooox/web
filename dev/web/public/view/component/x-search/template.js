export default function(){
    return `
        <form class="search">
            <input placeholder="Введите название аниме..." type="text">
            <input type='button' value='Поиск'>
        </form>
        <style>
        /* Style the search field */
        form.search input[type=text] {
            padding: 10px;
            font-size: 17px;
            border: 1px solid grey;
            /*float: left;*/
            width: 40%;
            background: #f1f1f1;
          }
          
          /* Style the submit button */
          form.search input[type=button] {
            /*float: left;*/
            width: 10%;
            padding: 10px;
            background: #2196F3;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-left: none; /* Prevent double borders */
            cursor: pointer;
          }
          
          form.search input[type=button]:hover {
            background: #0b7dda;
          }
          
          /* Clear floats */
          form.search::after {
            content: "";
            clear: both;
            display: table;
          }
        </style>
    `
}