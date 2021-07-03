<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title >Dashboard</title> 
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-storage.js"></script>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/
        line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="dashboard.css">
    </head>
    <body>
        <input type="checkbox" id="nav-toggle">
        <div class="sidebar Dtable-responsive">
            <div class="sidebar-brand">
                
                <h2><img class="logo" src="images (1).png" width="30px" height="30px" alt="">
                    <span class="lab la-accusoft"><span>GreenHaven</span></span></h2>
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                        <a href="" class="active"><span class="bx bxs-grid"></span>
                            <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href="clients.html"><span class="bx bxs-group"></span>
                            <span>Clients</span></a>
                    </li>
                    <li>
                        <a href="projects.html"><span class="bx bxl-product-hunt"></span>
                            <span>Projects</span></a>
                    </li>
                    <li>
                        <a href="employees.html"><span class="bx bx-money"></span>
                            <span>Employees</span></a>
                    </li>
                   
                    <li>
                        <a href=""><span class="bx bx-task"></span>
                            <span>Tasks</span></a>
                    </li>
                    <li>
                        <a href=""><span class="bx bx-landscape"></span>
                            <span>Plots</span></a>
                    </li>
                    <li>
                        <a href=""><span class="bx bx-calendar-event"></span>
                            <span>Events</span></a>
                    </li>
                    <li class="gallery">
                        <a href=""><span class="bx bx-category"></span>
                            <span>Gallery</span></a>
                            <div class="subs">
                                <!-- <ul>
                                <li><a href="videos.html">Videos</a></li>
                                
                                </ul> -->
                                <ul>
                                    <li><a href="pictures.html">Pictures</a></li>
                                </ul>
                            </div>
                            
                    </li>
                    <li>
                        <a href=""><span class="bx bx-collection"></span>
                            <span>Assets</span></a>
                    </li>
                    <li>
                        <a href=""><span class="bx bx-receipt"></span>
                            <span>Guest Book</span></a>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
        <div class="main-content">
            <header>
                <h3>
                    <label for="nav-toggle">
                        <span class="bx bxs-grid"></span>
                    </label>
                    Dashboard
                </h3>
                <div class="search-wrapper">
                    <span class="bx bx-search"></span>
                    <input type="search" placeholder="Search items">
                </div>
                
            </header>
            <main>
                <div class="cards">
                    <div class="card-single">
                        <div id="clientsNumber" >
                         
                            <span>Clients</span>
                        </div>
                        
                        <div>
                            <span class="bx bxs-group"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        
                            <div id="employeesNumber">
                                 
                                <span>Employees</span>
                            </div>
                            
                      
                        <div>
                            <span class="bx bxs-group"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div id="projectsNumber">
                            
                            <span>Projects</span>
                        </div>
                        <div>
                            <span class="bx bxs-book-content"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div id="pendingTasks">
                            
                            <span>Pending task</span>
                        </div>
                        <div>
                            <span class="bx bx-task"></span>
                        </div>
                    </div>
                </div>
                <div class="recent-grid">
                    
                    <div class="upcoming-events">
                        <div id="eventsModal" class="modal">
                            <div class="modal-cont">
                                <span class="close">&times;</span>
                                <h2>Enter Event Details</h2>

                             <div id="eventDetails" class="modal-body">
                            
                                <p><b>Event title</b></p>
                                <input type="style-text" placeholder="Long title" id="eventTit" required>
                                <p><b>Date of Event</b></p>
                                <input type="style-text" placeholder="eg 11/20/2020" id="eventDat" required>
                                <p><b> Event Co-ordinator</b></p>
                                <input type="style-text" placeholder="e.g Mr. Patrick" id="EventCod" required>
                                <p><b> Event Venue</b></p>
                                <input type="style-text" placeholder="e.g Beech Resort" id="eventVen" required>
                                <p><b>Description</b></p>
                                <textarea name="description" id="eventDesc" cols="40" rows="3" 
                                placeholder="Add a short description about the event" ></textarea>
                                
                                <div class="btnDiv"><button class="postEvent" id="postEvent" type="postEvent"
                                    onclick="postEvent()">Add Event</button></div>
                                <span ></span>
                            </div>
                            
                                
                            </div>
                        </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3>Upcoming Events</h3>
                                    <button class="addEvent" id="addEvents" onclick="addEvent()"> <span>Add Event
                                    </span></button>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table width= "100%">
                                            <thead>
                                                <tr>
                                                    <td>Title</td>
                                                    <td>Date</td>
                                                    <td>Co-ordinator</td>
                                                </tr>
                                            </thead>
                                            <tbody id="tbody2">


                                                <!-- <tr>
                                                    <td>Site visit at Diani</td>
                                                    <td>20/2/2022</td>
                                                    <td>Mr. Jack</td>
                                                </tr>
                                                <tr>
                                                    <td>Website launching</td>
                                                    <td>29/2/2022</td>
                                                    <td>Madam Christine</td>
                                                </tr>
                                                <tr>
                                                    <td>Ground breaking ceremony at Mwabungu</td>
                                                    <td>1/3/2022</td>
                                                    <td>Mr. Patrick</td>
                                                </tr> -->
                                            </tbody>
                                        </table>
                                    </div>
                                   
                                </div>
                            </div>
                    </div>
                    <div class="upcoming-events">
                        <div class="upoming-events">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Completed Tasks</h3>
                                    <button>All tasks<span class="bx bxs-right-arrow-alt">
                                    </span></button>
                                </div>
                                <div id="cmpleteTasks" class="Tcard-body">
                                    <!-- <div  > -->

                                        <div  id="Test" class="table-wrapper-scroll-y my-custom-scrollbar">

                                        </div>


                                        
                                </div>
                    </div>
                </div>
            </main>
        </div>

        <script>
               


                            // Your web app's Firebase configuration
                // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                var firebaseConfig = {
                    apiKey: "AIzaSyBEWOVJ5VBhb-oIf5-Y3SNiqeJwvO-rgus",
                    authDomain: "greenhaven-835b8.firebaseapp.com",
                    databaseURL: "https://greenhaven-835b8-default-rtdb.firebaseio.com",
                    projectId: "greenhaven-835b8",
                    storageBucket: "greenhaven-835b8.appspot.com",
                    messagingSenderId: "957724070580",
                    appId: "1:957724070580:web:643352cfc7858ad1353de1",
                    measurementId: "G-5M36VH3YEL"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                //firebase.analytics(); 

                // var database = ;
                var database = firebase.database().ref('Events');
//-------------------------------------------------------------------------------------------------------------//
                function addToDashboard(client){
                    var clientsN = document.getElementById("clientsNumber");
                  

                    var fetched = document.createElement("h2");
                    

                    fetched.innerHTML = client;
                    

                    clientsN.appendChild(fetched);
                
                    getCompleteTasks();
                    

                }
                function addToDashboardE(emps){
               
                    var employees = document.getElementById("employeesNumber");
                   

                    var fetchedE = document.createElement("h2");
                  

                 
                    fetchedE.innerHTML = emps;
                    

                   
                    employees.appendChild(fetchedE);
                    
                  //  getCompleteTasks();
                    

                }
                function addToDashboardP(pro){
                  
                    var poj = document.getElementById("projectsNumber");
                 

                    
                    var fetchedP = document.createElement("h2");
                    

                   
                    fetchedP.innerHTML = pro;
                    
                   
                    poj.appendChild(fetchedP);
                
                   // getCompleteTasks();
                    

                }
                function addToDashboardPe(pe){
                    
                    var tasks = document.getElementById("pendingTasks");

                
                    var fetchedPe = document.createElement("h2");

                   
                    fetchedPe.innerHTML = pe;

                   
                    tasks.appendChild(fetchedPe);
                   // getCompleteTasks();
                    

                }
               // ----------------------------------------------------------------------------------------------------------//
                function getDetails(emps){

                    firebase.database().ref('companyInfo').once("value",
                    function(Data){
                       
                                var client = Data.val().clients;
                                

                                 addToDashboard(client);
                                 getEvents();
                                
                                 getEmployessStat();
                                 getProjectStat();
                                 getTaskStat();

                               // window.alert(client + emps + pro + pe);
                        

                    })

                    //  addToDashboardE(emps);
                    //  addToDashboardP(pro);
                    // addToDashboardPe(pe);
                   
                }
                function getEmployessStat(){
                    firebase.database().ref('employeesStat').once("value",
                    function(Data){
                       
                                
                                var emps = Data.val().employees;
                               

                                  addToDashboardE(emps);
                                //  getEvents();

                               // window.alert(client + emps + pro + pe);
                        

                    })
                   
                }
                function getProjectStat(){
                    firebase.database().ref('projectStat').once("value",
                    function(Data){
                       
                               
                                var pro = Data.val().projects;
                             
                                addToDashboardP(pro);
                                //  getEvents();

                               // window.alert(client + emps + pro + pe);
                        

                    })
                    
                }

                function getTaskStat(){
                    
                    firebase.database().ref('taskStat').once("value",
                    function(Data){
                       
                                
                                var pe = Data.val().pendingTask;

                                
                                //  getEvents();

                               // window.alert(client + emps + pro + pe);
                         addToDashboardPe(pe);

                    })}
                function getEvents(){
                    firebase.database().ref('Events').once("value",
                    function(Snapshot){
                        Snapshot.forEach(
                            function(Events){
                                var tit = Events.val().title;
                                var dat = Events.val().date;
                                var cood = Events.val().Coordinator;

                                addEventsToTable(tit,dat,cood);
                                
                              
                                


                                //window.alert(cood);
                            }
                        )
                    })
                }

                function addEventsToTable(tit,dat,cood){
                    var tbody = document.getElementById("tbody2");
                    var trow = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var btn = document.createElement("button");

                    btn.style.width = "50px";
                    btn.style.height = "16px";
                    btn.style.marginTop = "10px";
                    btn.innerText = "Update";
                    btn.style.fontSize = "9px";
                    btn.style.background = "green";
                    btn.style.color = "white";
                    btn.style.padding = "2px";

                    td1.innerHTML = tit;
                    td2.innerHTML = dat;
                    td3.innerHTML = cood;

                    trow.appendChild(td1); 
                    trow.appendChild(td2);
                    trow.appendChild(td3);
                    trow.appendChild(btn);

                    tbody.appendChild(trow);
                    

                    
                }

                function getCompleteTasks(){
                    firebase.database().ref("Competed Tasks").once("value",
                    function(cTasks){
                        cTasks.forEach(
                            function(childRecord){
                                var tasks = childRecord.val().name;
                                addCompleteToDash(tasks);
                                
                            }
                        )
                        
                    });
                }

                function addCompleteToDash(tasks){
                    var comp = document.getElementById("Test");
                    var content = document.createElement("h4");
                    var trow = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var btn = document.createElement("button");

                    content.style.marginTop = "20px";

                    btn.style.width = "30px";
                    btn.style.height = "14px";
                    btn.style.marginTop = "10px";
                    btn.innerText = "Clear";
                    btn.style.fontSize = "8px";
                    btn.style.background = "red";
                    btn.style.color = "white";
                    btn.style.padding = "2px";
                    btn.style.marginLeft= "5px";
                    td1.style.fontWeight = "bold";

                    td1.innerHTML = tasks;
                    
                    trow.appendChild(td1);
                    trow.appendChild(btn);
                    
                    comp.appendChild(trow);
                    
                    

                }
                function addEvent(){
                    var modal = document.getElementById("eventsModal");
                    modal.style.display = "block";
                    
                }
                var span = document.getElementsByClassName("close")[0];

                span.onclick = function(){
                    var modal = document.getElementById("eventsModal");
                    modal.style.display = "none";
                }

                document.getElementById('eventDetails').addEventListener('postEvent',postEvent);
                function postEvent() {
                    // e.preventDefault();
                    var modal = document.getElementById("eventsModal");
                    modal.style.display = "none";
                    var title = getInputValue('eventTit');
                    var date = getInputValue('eventDat');
                    var coord = getInputValue('EventCod');
                    var venue = getInputValue('eventVen');
                    var desc = getInputValue('eventDesc');

                    saveEvent(title,date,coord,venue,desc);
                }
                function getInputValue(id)
                {
                    return document.getElementById(id).value;
                  
                }
                function saveEvent(title,date,coord,venue,desc){
                    var newEvent = database.push();
                    var eventKey = newEvent.key;

                    newEvent.set(
                        {
                            Coordinator: coord,
                            title:title,
                            venue:venue,
                            date: date,
                            description:desc,
                            eventID:eventKey
                        }
                    );
                    window.alert("Event added successfully...")
                    document.getElementById('eventTit').reset();

                }


               // window.onload = getEvents;
                window.onload = getDetails;
        </script>
    </body>
</html>
