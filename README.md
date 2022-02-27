# HOT-bomb-tracking
This web application utilizing Flask (backend) and React (frontend) allows anonymous users to report events such as bombings, incoming troops, etc. while also dropping a pin at that location. The motivation for creating this application is to help the general public be aware of any nearby dangers so they can prepare accordingly.

Using React, we created an interface where users can anonymously enter their reports by specifying the event type (ex. bombing, incoming troops), a description, and a location of the event. A pin is then dropped on a map at the location of the event. The reports and map are updated every two hours to make sure the occurence of the event is still relevant. There is also a search bar that allows users to navigate the application.

The backend code was written with Flask, a web framework written in Python. All data reported by the user on the frontend is stored in database. The data is processed so that the frontend can receive a specific location of where to place a pin on the map.

We faced multiple challenges implementing our code such as navigating Flask and SQLAlchemy as we did not have previous experience using it. In addition, there was an extensive debugging session as we connected the backend and the frontend.
