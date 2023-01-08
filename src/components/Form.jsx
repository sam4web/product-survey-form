import { useState } from 'react';

const Form = ({ sendInfo }) => {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
  });

  const [customerAddress, setCustomerAddress] = useState({
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postal: '',
    country: '',
  });

  const [customerOpinion, setCustomerOpinion] = useState({
    how_long_using_product: '',
    comments_and_suggestions: '',
    continue_with_product: '',
    satisfied_opinion: '',
  });

  const handleChange = (event) => {
    const { name, value, className } = event.target;
    switch (className) {
      // customerInfo
      case 'customerInfo':
        setCustomerInfo((prevCustomerInfo) => ({
          ...prevCustomerInfo,
          [name]: value,
        }));
        break;
      // customerAddress
      case 'customerAddress':
        setCustomerAddress((prevCustomerAddress) => ({
          ...prevCustomerAddress,
          [name]: value,
        }));
        break;
      // customerOpinion
      case 'customerOpinion':
        setCustomerOpinion((prevcustomerOpinion) => ({
          ...prevcustomerOpinion,
          [name]: value,
        }));
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const customerData = {
      ...customerInfo,
      ...customerAddress,
      ...customerOpinion,
    };
    sendInfo(customerData);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='form__title'>
            <h2>Customer Information:</h2>
          </div>
          {/* form title */}

          <div className='form__group'>
            <h3 className='form__group-title'>Customer Name</h3>
            <div className='group__col-2'>
              <div className='input-container'>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='customerInfo'
                  value={customerInfo.firstName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='firstName'>First Name</label>
              </div>
              <div className='input-container'>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='customerInfo'
                  value={customerInfo.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='lastName'>Last Name</label>
              </div>
            </div>
          </div>
          {/* form group */}

          <div className='form__group'>
            <h3 className='form__group-title'>Address</h3>
            <div className='input-container'>
              <input
                type='text'
                name='streetAddress'
                id='streetAddress'
                className='customerAddress'
                value={customerAddress.streetAddress}
                onChange={handleChange}
                required
              />
              <label htmlFor='streetAddress'>Street Address</label>
            </div>
            <div className='input-container'>
              <input
                type='text'
                name='streetAddress2'
                id='streetAddress2'
                className='customerAddress'
                value={customerAddress.streetAddress2}
                onChange={handleChange}
              />
              <label htmlFor='streetAddress2'>Street Address Line 2</label>
            </div>
            <div className='group__col-2'>
              <div className='input-container'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='customerAddress'
                  value={customerAddress.city}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='city'>City</label>
              </div>
              <div className='input-container'>
                <input
                  type='text'
                  name='state'
                  id='state'
                  className='customerAddress'
                  value={customerAddress.state}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='state'>State / Province</label>
              </div>
            </div>
            <div className='group__col-2'>
              <div className='input-container'>
                <input
                  type='text'
                  name='postal'
                  id='postal'
                  className='customerAddress'
                  value={customerAddress.postal}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='postal'>Postal / Zip Code</label>
              </div>
              <div className='input-container'>
                <input
                  type='text'
                  name='country'
                  id='country'
                  className='customerAddress'
                  value={customerAddress.country}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='country'>Country</label>
              </div>
            </div>
          </div>
          {/* form group */}

          <div className='form__group'>
            <h3 className='form__group-title'>Contact Number</h3>
            <div className='input-container '>
              <input
                type='text'
                name='contact'
                id='contact'
                className='customerInfo'
                placeholder='(000) 000-0000'
                value={customerInfo.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* form group */}
          <div className='form__group line-break'>
            <h3 className='form__group-title'>E-mail</h3>
            <div className='input-container '>
              <input
                type='email'
                name='email'
                id='email'
                className='customerInfo'
                placeholder='ex: myname@example.com'
                value={customerInfo.email}
                onChange={handleChange}
                required
              />
              <label htmlFor='email'>example@example.com</label>
            </div>
          </div>
          {/* form group */}

          <div className='form__group'>
            <h3 className='form__group-title'>
              How long have you been using this product and why?
            </h3>
            <div className='input-container'>
              <textarea
                name='how_long_using_product'
                className='customerOpinion'
                value={customerOpinion.how_long_using_product}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* form group */}

          <div className='form__group'>
            <h3 className='form__group-title'>
              Write your comments and suggestions about our products in
              comparison with other competitors:
            </h3>
            <div className='input-container'>
              <textarea
                name='comments_and_suggestions'
                className='customerOpinion'
                value={customerOpinion.comments_and_suggestions}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* form group */}

          <div className='form__group'>
            <h3 className='form__group-title'>
              Would you like to continue with our product? if No why:
            </h3>
            <div className='input-container'>
              <textarea
                name='continue_with_product'
                className='customerOpinion'
                value={customerOpinion.continue_with_product}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* form group */}

          <div className='form__group line-break'>
            <h3 className='form__group-title'>
              Are you satisfied with our product performance? share your
              opinions:
            </h3>
            <div className='input-container'>
              <textarea
                name='satisfied_opinion'
                className='customerOpinion'
                value={customerOpinion.satisfied_opinion}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* form group */}

          <h3 className='end-message'>Thank you for completing this survey!</h3>

          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
