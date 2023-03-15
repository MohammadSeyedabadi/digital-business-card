import React from 'react'
import Me from '../images/me.jpg'

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={Me} alt="Mohammad Seyedabadi photo" />
      <h1 className="info--fullname">Mohammad Seyedabadi</h1>
      <h5 className="info--role">Frontend Developer</h5>
      <p className="info--website">
        <a className="info--websiteLink" href="#">
          MohammadSeyedabadi.website
        </a>
      </p>

      <div className="info--button">
        <address>
          <a href="#">
            <button className="button--email">
              <span className="button--text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="button--svg bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                Email
              </span>
            </button>
          </a>
        </address>
      </div>
    </div>
  )
}
