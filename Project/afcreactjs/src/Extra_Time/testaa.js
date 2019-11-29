import { BehaviorSubject } from 'rxjs';



const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const  Testaa = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    currentUserValue () { 
        alert('asdsaaaaaaaaaaaa')    ;
    }
};

function login() {
    alert('asdasdssssssssssssss');
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}


