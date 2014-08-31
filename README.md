UserManagementPoC
=================

The solution file UserRegistrationPoC.sln consist of 2 visual Studio 2013 projects:

1. RegisterUserPoC - AngularJs code for user registration screens. 
It is a SPA that allows user to register and login to the site.

2. UserRegistrationServices - ASP.NET MVC Web API that communicates with derpeddit APIs. 
These web API are directly consumed by the angularJs application.

AngularJs application cannot directly make call to derpeddit APIs due to cross domain restricition. To overcome this restriction,
The Web API were creeted in C#. The AngualarJs application will locally call the UserRegistrationServices 
which allows Cross Domain calls. 
Since this is a PoC code, no security has been built for the Web API calls.
