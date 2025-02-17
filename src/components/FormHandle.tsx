import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const FormHandle = () => {

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password:"",
    phoneNumber: "",
    gender: "",
    subject: "",
    about: ""
  })
  const genderOptions = ["Male", "Female", "Others"];

  // type FormValues = {
  //     firstname: string;
  //     lastname: string;
  // };
  // const [formValuess, setFormValues] = useState<FormValues>({ firstname: '', lastname: '' });


  const navigate = useNavigate();

  // const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  //   setValues({ ...values, [e.target.name]: [e.target.value] })

  //     }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {

      setPhoneNumber(value);
      setErrorMsg('');
    } else {
      setErrorMsg('Phone number should contain only 10 digits.');
    }

    
  };

  const handleSumbit = (e: any) => {
    e.preventDefault()
    const formData= new FormData(e.target)
    const data=Object.fromEntries(formData)
    
    //console.log("e.preventDefault() cosole ",e.preventDefault())
    console.log("datasss",data)


    if (phoneNumber.length !== 10) {
      setErrorMsg('Phone number must be exactly 10 digits long.');
      return
    }else{
      setErrorMsg("")
    }

    let isFormDataExist= localStorage.getItem("formData") === null
    if(isFormDataExist){
      localStorage.setItem("formData",JSON.stringify([data]))
      console.log("if condition")
    }else{
      let formData=localStorage.getItem("formData")
      const getFormData=formData ? JSON.parse(formData): null
      getFormData.push(data);
      localStorage.setItem("formData",JSON.stringify(getFormData))
      console.log("else condition")
    }
    



    if (!validateEmail(email)) {
      alert('please enter valid Email');
    }

  }

  const resetVal = (e: FormEvent) => {
    console.log("event", e)
    //setFormValues({firstname:'',lastname:''})
  };


  const validateEmail = (email: string): boolean => {
    const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mailPattern.test(email);
  };


  const handleChangess = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
    const value1 = e.target.value;
    setSelectedGender(e.target.value);
    setEmail(value1);


    if (!validateEmail(value1)) {
      setError('Please enter a valid email address');
    }else{
      setError("");
    }

  };

  const handleReset = () => {
    setError('');
    setErrorMsg('');
  };

  const handleSubmit = () => {

    if (error === '' && errorMsg === '') {
      navigate('/loginPage');
    } else {
      alert('Error occurred');
    }
    
  };

  return (
    <div className='container'>
      <h1>Student Form</h1>
      <form onSubmit={handleSumbit} onReset={resetVal} >
        <label htmlFor='firstname'>First Name*</label>
        <input type='text' placeholder='Enter First Name' name='firstname'  required></input>

        <label htmlFor='lastname'>Last Name*</label>
        <input type='text' placeholder='Enter Last Name' name='lastname'  required></input>

        <label htmlFor='email'>Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChangess}
          required
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <label htmlFor='password'>Password*</label>
        <input type='password' placeholder='Enter Password' name='password'  required></input>

        <label htmlFor="phoneNumber">Phone Number*</label>
        <input
          type="number"
          name="phoneNumber"
          onChange={handlePhoneNumberChange}
          maxLength={10}
          required
        />
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

        <label htmlFor='gender'>Gender</label>
      
        {genderOptions.map((gender) => (
          <div key={gender}>
            <input
              type="radio"
              id={gender}
              name="gender"
             value={gender}
            />
            <label htmlFor={gender}>{gender}</label>
          </div>
        ))}
     
      {/* <div>
        <p>Selected Gender: {selectedGender}</p>
      </div> */}

        <label htmlFor='subject'>Subject</label>
        <select name='subject' id='subject'  >
          <option value={'maths'}>Maths</option>
          <option value={'science'}>Science</option>
          <option value={'tamil'}>Tamil</option>
          <option value={'english'}>English</option>
        </select>

        <label htmlFor='about'>About</label>
        <textarea name='about' id='about' cols={30} rows={10} placeholder='Enter Description' ></textarea>

        <button type='reset' onClick={handleReset}  >Reset</button>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>


  )
}
