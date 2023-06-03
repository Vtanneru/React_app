import React, {useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import { statesData } from '../data/statesData';
import { countiesData } from '../data/countiesData';
import { countriesData } from '../data/countriesData';

const MainPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState({ first: '', middle: '', last: '' });
  const [address, setAddress] = useState({ line1: '', line2: '', city: '', state: '', zip: '' });
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [residency, setResidency] = useState({ state: '', county: '' });
  const [citizenship, setCitizenship] = useState('');

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({ ...prevName, [name]: value }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleResidencyChange = (event) => {
    const { name, value } = event.target;
    setResidency((prevResidency) => ({ ...prevResidency, [name]: value }));
  };

  const handleCitizenshipChange = (event) => {
    setCitizenship(event.target.value);
  };

  const handleNext = () => {
    const data = {
      name,
      address,
      email,
      gender,
      residency,
      citizenship,
    };

    navigate('/second-page', { state: { formData: data } });
  };

  const handleReset = () => {
    setName({ first: '', middle: '', last: '' });
    setAddress({ line1: '', line2: '', city: '', state: '', zip: '' });
    setEmail('');
    setGender('');
    setResidency({ state: '', county: '' });
    setCitizenship('');
  };

return (
    <div className="container">
      <h1 className="heading">React App</h1>
      <h2 className="subheading">Your Information</h2>
      <div className="form-section">
        <h3>Your Name</h3>
        <div className="name-inputs">
          <input
            type="text"
            name="first"
            placeholder="First Name"
            value={name.first}
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="middle"
            placeholder="Middle Name"
            value={name.middle}
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            value={name.last}
            onChange={handleNameChange}
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Mailing Address</h3>
        <div className="address-inputs">
          <input
            type="text"
            name="line1"
            placeholder="Address Line 1"
            value={address.line1}
            onChange={handleAddressChange}
          />
          <br />
          <input
            type="text"
            name="line2"
            placeholder="Address Line 2"
            value={address.line2}
            onChange={handleAddressChange}
          />
          <br />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
          />
        </div>
        <br />
        <div className="state-zip">
            <select
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                className="state-dropdown"
                >
                <option value="">State</option>
                {statesData.map((state) => (
                <option key={state.code} value={state.code}>
                    {state.name}
                </option>
                ))}
            </select>
            <br />
            <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={address.zip}
                onChange={handleAddressChange}
            />
        </div>
      </div>

      <div className="form-section">
        <h3>Email</h3>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>

      <div className="form-section">
        <h3>Your Gender</h3>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-section">
        <h3>State of Residency</h3>
        <select name="state" value={residency.state} onChange={handleResidencyChange}>
          <option value="">Select State</option>
          {statesData.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-section">
        <h3>County of Residency</h3>
        <select name="county" value={residency.county} onChange={handleResidencyChange}>
          <option value="">Select County</option>
          {countiesData[residency.state]?.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
      </div>

      <div className="form-section">
        <h3>Country of Citizenship</h3>
        <select value={citizenship} onChange={handleCitizenshipChange}>
          <option value="">Select Country</option>
          {countriesData.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="button-container">
      <div className="buttons">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleNext}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default MainPage;