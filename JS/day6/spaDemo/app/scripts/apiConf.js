
/* To mock live api urls with local static data; default false */
spa.api.mock = true;

/* live-api url prefix to identify Live-Api calls */
app['api'] = {
  liveApiPrefix: 'api/',
};

/* All API Urls */
/* $ prefix in Key refers to dataUrl for the component */

/* ! in url => force to mock location */
/* ~ in url => force to live location */

/*
    {<urlParamName>}  => replaced with actual urlParamValue, for both mock and live

    {urlParamName}   => if mock, replaced with string '_urlParamName'
                      => if live, replaced with actual urlParamValue

  {{<urlParamName>}}  => if mock replaced with actual urlParamValue
                      => if live removes entire param
*/
$.extend(spa.api.urls, {

  $profileView:'https://reqres.in/api/users/{pid}'

});
