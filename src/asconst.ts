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


const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

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

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);