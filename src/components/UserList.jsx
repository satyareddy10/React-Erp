import { useState, useEffect } from 'react';
import './UserList.css';

import { getAllUsers, searchUsers } from '../services/userService'

import Table from "./Table"
import searchBar from './searchBar';

function UserList() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([])

  const [debounsearch, setDebounceSearch] = useState('')
  // const Header = ["Username", "Email", "Phone No", "Age", "Gender"]
  const Header = [
    { key: "username", lable: "Username" },
    { key: "email", lable: "Email" },
    { key: "phone", lable: "Phone No" },
    { key: "age", lable: "Age" },
    { key: "gender", lable: "Gender" }
  ]

  const handleSearchUsers = async (signal) => {
    const response = await searchUsers(search, signal);
    setUsers(response.data.users)
    console.log(response.data)
  }

  const handleGetAllUsers = async (signal) => {
    const response = await getAllUsers(signal);
    setUsers(response.data.users)
    console.log(response.data)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const controller = new AbortController();
    if (debounsearch) {
      handleSearchUsers(controller.signal);
    } else {
      handleGetAllUsers(controller.signal)
    }

    return () => {
      controller.abort()
    }
  }, [debounsearch])
  return (
    <div className="user-list-container">
      <div className="user-list-title-area">
        <h2>User Management</h2>
        <p>A list of all user accounts in the system including their contact details, age, and gender.</p>
      </div>

      <div className="user-list-actions">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>searching: {search}</p>
        </div>
      </div>
      <Table data={users} header={Header} />

    </div>
  );
}

export default UserList;
