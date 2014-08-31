using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace UserRegistrationServices.Controllers
{
    public class AccountController : ApiController
    {
        // POST api/account
        [HttpOptions]
        [HttpPost]
        public HttpResponseMessage Post(UserRecord user)
        {
            var client = new RestClient();
            client.EndPoint = @"https://derpeddit.herokuapp.com/api/v1/core/auth/login"; ;
            client.Method = HttpVerb.POST;
            client.ContentType = "application/json";
            client.PostData = "{\"username\":\"" + user.username + "\",\"password\":\"" + user.password + "\"}";
            var json = client.MakeRequest();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, json);
            return response;
        }

        [HttpPut]
        public HttpResponseMessage Put()
        {
            var client = new RestClient();
            client.EndPoint = @"https://derpeddit.herokuapp.com/api/v1/core/auth/logout"; ;
            client.Method = HttpVerb.POST;
            var json = client.MakeRequest();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, json);
            return response;
        }

        
    }
}
