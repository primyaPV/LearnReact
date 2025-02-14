import React, { FormEvent, useState } from 'react'


export const FormHandle = () => {

    type FormValues = {
        firstname: string;
        lastname: string;
      };
      const [formValuess, setFormValues] = useState<FormValues>({ firstname: '', lastname: '' });
      const [phoneNumber, setPhoneNumber] = useState('');
      const [errorMsg, setErrorMsg] = useState('');
    
    const[values,setValues] =useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        gender:"",
        subject:"",
        about:""
    })

    const handleChanges= (e :React.ChangeEvent<HTMLInputElement| HTMLSelectElement | HTMLTextAreaElement>) =>{
        setValues({...values,[e.target.name]:[e.target.value]})

        
    }
//============================================================================phone number
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
  
      if (/^\d{0,10}$/.test(value)) {
        setPhoneNumber(value);
        setErrorMsg(''); // Clear error message when the input is valid
      } else {
        setErrorMsg('Phone number should contain only 10 digits.');
      }
    };

    const handleSumbit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(values)

//============================================================================phone number
e.preventDefault();
if (phoneNumber.length !== 10) {
  setErrorMsg('Phone number must be exactly 10 digits long.');
} 

//============================================================================mail
        if (!validateEmail(email)) {
            alert('please enter valid Email');
          } 

        }


    const resetVal = (e:FormEvent) => {
       console.log("event",e)
       //setFormValues({firstname:'',lastname:''})
      };

      //.......................................................
      
        const [email, setEmail] = useState<string>(''); 
        const [error, setError] = useState<string>(''); 
      
       
        const validateEmail = (email: string): boolean => {
          const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return mailPattern.test(email);
        };
      
       
        const handleChangess = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValues({...values,[e.target.name]:[e.target.value]})
          const value = e.target.value;
          setEmail(value);
      
          
          if (!validateEmail(value)) {
            setError('Please enter a valid email address');
          } else {
            setError(''); 
          }
        };
      
        const handleReset = () => {
          setError('');
          setErrorMsg(''); 
        };
        

        //..........................................................

  return (
    <div className='container'>
        <h1>Student Form</h1>
        <form onSubmit={handleSumbit} onReset={resetVal} >
            <label htmlFor='firstname'>First Name*</label>
            <input type='text' placeholder='Enter First Name' name='firstname' onChange={(e)=>handleChanges(e)} required></input>

            <label htmlFor='lastname'>Last Name*</label>
            <input type='text' placeholder='Enter Last Name' name='lastname' onChange={(e)=>handleChanges(e)} required></input>

            <label htmlFor='email'>Email*</label>
            <input
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={handleChangess}
        required
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <label htmlFor="phoneNumber">Phone Number*</label>
        <input
          type="text"
          id="phoneNumber"
          onChange={handlePhoneNumberChange}
          maxLength={10}
          required
        />
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

            <label htmlFor='gender'>Gender</label>
            <input type='radio' name='gender' onChange={(e)=>handleChanges(e)} />Male
            <input type='radio' name='gender' onChange={(e)=>handleChanges(e)} />Female
            <input type='radio' name='gender' onChange={(e)=>handleChanges(e)} />Others

            <label htmlFor='subject'>Subject</label>
            <select name='subject' id='subject' onChange={(e)=>handleChanges(e)} >
                <option value={'maths'}>Maths</option>
                <option value={'science'}>Science</option>
                <option value={'tamil'}>Tamil</option>
                <option value={'english'}>English</option>
            </select>

            <label htmlFor='about'>About</label>
            <textarea name='about' id='about' cols={30} rows={10} placeholder='Enter Description' onChange={(e)=>handleChanges(e)}></textarea>

            <button type='reset' onClick={handleReset}  >Reset</button>
            <button type='submit' >Submit</button>
        </form>
    </div>

    
  )
}
