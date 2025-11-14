// * as const assertaion 
// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }; 
// const UserRoles = {
//         Admin : "Admin",
//         Editor : "Editor",
//         Viewer : "Viewer"
//     } as  const;
var UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
};
/*
{
  readonly Admin : "Admin",
    readonly Editor : "Editor",
    readonly Viewer : "Viewer"

    1.typeof operator
    2. keyof operator

    const user = {
    name: "Sopon islam",
    id: 345
    }

    typeof user
    
    {
    id: number ;
    name : string;
    };

    typof userRoles
    
    {
        Admin : 'Admin' ;
        Editor: "Editor";
        Viewer: "Viewer";
    }
       keyof typeof userRoles;
       "Admin" | "Editor" | "Viewer"






}
*/
// const canEdit = (role: keyof typeof UserRoles) => {
//     if (role === UserRoles.Admin || role === UserRoles.Editor) {
//         return true;
//     } else {
//         return false;
//     }
// };
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
