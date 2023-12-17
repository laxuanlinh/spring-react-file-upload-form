import { useState } from "react"

export default function Form() {

    const [name, setName] = useState("");
    const [file, setFile] = useState<File | undefined>();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement & {
            files: FileList;
          }
        setFile(target.files[0]);
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log("submitting");
        let formData = new FormData();
        const model = {name: name};
        formData.append("model", JSON.stringify(model))
        if ( typeof file !== 'undefined' ){
            formData.append("file", file);
        }
        fetch("http://localhost:8080/test", {
            method: 'POST',
            body: formData
        }).then(
            response => response.json() // if the response is a JSON object
          ).then(
            success => console.log(success) // Handle the success response object
          ).catch(
            error => console.log(error) // Handle the error response object
          );
    }

    return (
        <form>
            Name
            <input type="text" name="name" value={name} onChange={handleNameChange}/>
            <br/>
            <input type="file" name="file" onChange={handleFileChange}/>
            <br/>
            <button onclick={handleSubmit}>Submit</button>
        </form>
    )
}