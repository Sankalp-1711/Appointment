// import React from 'react';
// import './Appointment.scss';

// const BookAppointment = () => {
//   return (
//     <div className="appointment-container">
//       <div className="appointment-content">
//         <h2>Book an Appointment</h2>
//         <h1>Get Recommendations from a personal Stylist</h1>
//         <form>
//           <div className="form-row">
//             <input type="text" placeholder="Your Name" />
//             <input type="date" placeholder="Select a Date" />
//           </div>
//           <div className="form-row">
//             <input type="tel" placeholder="Phone Number" />
//             <input type="email" placeholder="Email" />
//           </div>
//           <div className="form-row">
//             <select>
//               <option>Select your Country</option>
//               {/* Add countries */}
//             </select>
//             <select>
//               <option>Select your City</option>
//               {/* Add cities */}
//             </select>
//           </div>
//           <textarea placeholder="Your Message" rows="4"></textarea>
//           <button type="submit">Book an Appointment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;



// import React from 'react';
// import './Appointment.scss';

// const BookAppointment = () => {
//   return (
//     <div className="appointment-container">
//       <div className="appointment-content">
//         <h2>Book an Appointment</h2>
//         <h1>Get Recommendations from a Personal Stylist</h1>
//         <form>
//           <div className="form-row">
//             <input type="text" placeholder="Your Name" />
//             <input type="date" placeholder="Select a Date" />
//           </div>
//           <div className="form-row">
//             <input type="tel" placeholder="Phone Number" />
//             <input type="email" placeholder="Email" />
//           </div>
//           <div className="form-row">
//             <select>
//               <option>Select your Country</option>
//               {/* Add country options */}
//             </select>
//             <select>
//               <option>Select your City</option>
//               {/* Add city options */}
//             </select>
//           </div>
//           <textarea placeholder="Your Message" rows="4"></textarea>
//           <button type="submit">Book an Appointment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;



import React from 'react';
import './Appointment.scss'; // Assuming you have your styles in this file

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <h2>Book an Appointment</h2>
        <h1>Get Recommendations from a Personal Stylist</h1>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="date" placeholder="Choose the date" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <select required>
              <option value="" disabled selected>Select your Country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              {/* Add more countries as needed */}
            </select>
            <select required>
              <option value="" disabled selected>Select your City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more cities as needed */}
            </select>
          </div>
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Book an Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
