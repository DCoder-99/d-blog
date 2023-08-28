import { ContactI } from "../pages/contact/Contact";

const getContact = (contactId:string) => {

    const contacts: ContactI[] = [
        {
          first: "Your",
          last: "Name",
          avatar: "https://placekitten.com/g/200/200",
          twitter: "your_handle",
          notes: "Some notes",
          favorite: true,
          id: '1'
        },
        {
          first: "Tuan",
          last: "Anh",
          avatar: "https://placekitten.com/g/200/200",
          twitter: "anhnt.nta99",
          notes: "Tuan Anh tap code",
          favorite: true,
          id: '2'
        },
        {
          first: "Your",
          last: "Name",
          avatar: "https://placekitten.com/g/200/200",
          twitter: "your_handle",
          notes: "Some notes",
          favorite: true,
          id: '3'
        }
    ];

    const index = contacts.findIndex(c => c.id === contactId)

    return contacts[index]
};

const updateContact = async (contactId: string, contact:any) => {
  console.log("UPDATE CONTACT")
  return {contact}
}

const deleteContact = async (contactId:string) => {
  return true
}

export { getContact, updateContact, deleteContact };
