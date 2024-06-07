import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user-list">UserList</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create-user">Create User</NavLink>
                    </li>    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user-list-action-async">Demo Action Async</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/react-query-userlist">React query - user list</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/react-query-create-user">React query - create user</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default HeaderHome