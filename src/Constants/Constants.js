
const baseUrl = "https://braelo.azurewebsites.net";
export { baseUrl };


// const handleDelete = async () => {
//     try {
//       const response = await axios.post(
//         `https//braelo.azurewebsites.net/api/advertisement/delete-ad/65329faa0272220330051e91?type=TextAd`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       console.log("Request", response);
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error(error.response.data.errors.msg);
//     }
//   };

//   export {handleDelete};