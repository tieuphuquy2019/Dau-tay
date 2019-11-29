
import decodeJwt from 'jwt-decode';

const fakeAuth = {
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.he0ErCNloe4J7Id0Ry2SEDg09lKkZkfsRiGsdX_vgEg',
    isAuthenticated: false,
    authenticate(cb,a) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 10); // fake async

//----------------------------------------------------------------------
    
    var decodedToken = decodeJwt(fakeAuth.token);
    localStorage.setItem('token', fakeAuth.token);
    localStorage.setItem('permissions', decodedToken.name);
    alert(decodedToken.iat);

//----------------------------------------------------------------------
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 10);
    //--------------------------------------------------------------
    localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();

      //--------------------------------------------------------------
    }   
};

function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}


function checkCookie() {
    var username = getCookie('username');
    if (username != '') {
        alert('Welcome again ' + username);
    } else {
        username = prompt('Please enter your name: ',  '');
        if (username != '' && username != null) {
            // this.setCookie('username', username, 365);
        }
    }
}
export default fakeAuth;