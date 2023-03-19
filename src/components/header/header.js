import React from "react"
// import Medicine from "../../assets/images/Medicine.svg"
import {GiPlantsAndAnimals} from 'react-icons/gi'
import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Card } from "./card"
import { User } from "./user"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              Home
            </Link>
            <Link to='/product'>
              Products
            </Link>
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          <div className='account flexCenter'>
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
