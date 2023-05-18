import { FaPencilAlt } from 'react-icons/fa';
import { Button, Container, Icon, Input, NewUserLink, Table, TableBody, TableData, TableHeader, TableHeaderGroup, TableRow, UserAccessLevel, UserAccessLevelOption, UserAccessLevelSelect } from './style';
import { UserManagementInputChange, UserManagementPencilClick, userManagementSubmitChanges } from '../types';
import { useState } from 'react';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function UserManagement() {
  if (!auth.isServiceManager()) location.href = '/';

  const [userData, setUserData] = useState({
    branches: [
      {
        branch: 7039,
        users: [
          {
            name: 'Joshua Tuinder',
            nameIsEditable: false,
            email: 'tuinderj@rushenterprises.com',
            emailIsEditable: false,
            userAccessLevel: 'Admin',
            userAccessLevelisEditable: false,
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
            deleteConfirmation: false,
          },
          {
            name: 'Robert Elliott',
            nameIsEditable: false,
            email: 'elliottr@rushenterprises.com',
            emailIsEditable: false,
            userAccessLevel: 'Service Manager',
            userAccessLevelisEditable: false,
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
            deleteConfirmation: false,
          },
          {
            name: 'Jeff Thomas',
            nameIsEditable: false,
            email: 'thomasj@rushenterprises.com',
            emailIsEditable: false,
            userAccessLevel: 'Basic',
            userAccessLevelisEditable: false,
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
            deleteConfirmation: false,
          },
        ],
      },
    ],
  });

  const handlePencilClick = ({ e, type, branchIndex, userIndex }: UserManagementPencilClick): void => {
    // const target = e.currentTarget as HTMLElement;
    const newUserData = { ...userData };

    switch (type) {
      case 'NAME':
        newUserData.branches[branchIndex].users[userIndex].nameIsEditable = true;
        break;
      case 'EMAIL':
        newUserData.branches[branchIndex].users[userIndex].emailIsEditable = true;
        break;
      case 'BRANCH':
        newUserData.branches[branchIndex].users[userIndex].branchIsEditable = true;
        break;
      case 'USER ACCESS LEVEL':
        newUserData.branches[branchIndex].users[userIndex].userAccessLevelisEditable = true;
        break;
    }
    newUserData.branches[branchIndex].users[userIndex].changesRequested = true;
    setUserData(newUserData);
  };

  const handleInputChange = ({ e, type, branchIndex, userIndex }: UserManagementInputChange): void => {
    const target = e.currentTarget as HTMLInputElement;
    const newUserData = { ...userData };
    switch (type) {
      case 'NAME':
        newUserData.branches[branchIndex].users[userIndex].name = target.value;
        break;
      case 'EMAIL':
        newUserData.branches[branchIndex].users[userIndex].email = target.value;
        break;
      case 'BRANCH':
        newUserData.branches[branchIndex].users[userIndex].branch = Number(target.value);
        break;
      case 'USER ACCESS LEVEL':
        newUserData.branches[branchIndex].users[userIndex].userAccessLevel = target.value;
        break;
    }
    setUserData(newUserData);
  };

  const handleSubmitChanges = ({ branchIndex, userIndex }: userManagementSubmitChanges): void => {
    const newUserData = { ...userData };

    newUserData.branches[branchIndex].users[userIndex].nameIsEditable = false;
    newUserData.branches[branchIndex].users[userIndex].emailIsEditable = false;
    newUserData.branches[branchIndex].users[userIndex].branchIsEditable = false;
    newUserData.branches[branchIndex].users[userIndex].userAccessLevelisEditable = false;
    newUserData.branches[branchIndex].users[userIndex].changesRequested = false;

    const user = {
      name: newUserData.branches[branchIndex].users[userIndex].name,
      email: newUserData.branches[branchIndex].users[userIndex].email,
      branch: newUserData.branches[branchIndex].users[userIndex].branch,
      userAccessLevel: newUserData.branches[branchIndex].users[userIndex].userAccessLevel,
    };

    // fetch post to update user
    console.log(user);

    setUserData(newUserData);
  };

  const handleDeleteUser = ({ branchIndex, userIndex }: userManagementSubmitChanges): void => {
    const newUserData = { ...userData };

    if (!userData.branches[branchIndex].users[userIndex].deleteConfirmation) {
      newUserData.branches[branchIndex].users[userIndex].deleteConfirmation = true;
    } else {
      newUserData.branches[branchIndex].users.splice(userIndex, 1);
    }

    setUserData(newUserData);
  };

  return (
    <>
      <Container>
        <Table>
          <TableHeaderGroup>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              {auth.isAdmin() ? (
                <>
                  <TableHeader>Branch</TableHeader>
                  <TableHeader>Account Level</TableHeader>
                  <TableHeader>Update/Remove</TableHeader>
                </>
              ) : (
                <></>
              )}
            </TableRow>
          </TableHeaderGroup>
          <TableBody>
            {userData.branches.map((branch, branchIndex) =>
              branch.users.map(({ name, nameIsEditable, email, emailIsEditable, branchIsEditable, userAccessLevel, changesRequested, userAccessLevelisEditable, deleteConfirmation }, userIndex) => (
                <TableRow key={userIndex}>
                  <TableData>
                    <Input
                      tabIndex={nameIsEditable ? 0 : -1}
                      type='text'
                      value={name}
                      readOnly={!nameIsEditable}
                      className={nameIsEditable ? 'editable' : 'not-editable'}
                      onChange={(e) => handleInputChange({ e, type: 'NAME', branchIndex, userIndex })}
                    />
                    {!nameIsEditable ? (
                      <Icon onClick={(e) => handlePencilClick({ e, type: 'NAME', branchIndex, userIndex })}>
                        <FaPencilAlt />
                      </Icon>
                    ) : (
                      <></>
                    )}
                  </TableData>
                  <TableData>
                    <Input
                      tabIndex={nameIsEditable ? 0 : -1}
                      type='email'
                      value={email}
                      readOnly={!emailIsEditable}
                      className={emailIsEditable ? 'editable' : 'not-editable'}
                      onChange={(e) => handleInputChange({ e, type: 'EMAIL', branchIndex, userIndex })}
                    />
                    {!emailIsEditable ? (
                      <Icon onClick={(e) => handlePencilClick({ e, type: 'EMAIL', branchIndex, userIndex })}>
                        <FaPencilAlt />
                      </Icon>
                    ) : (
                      <></>
                    )}
                  </TableData>
                  {auth.isAdmin() ? (
                    <>
                      <TableData>
                        <Input
                          tabIndex={nameIsEditable ? 0 : -1}
                          type='number'
                          readOnly={!branchIsEditable}
                          value={branch.branch}
                          className={branchIsEditable ? 'editable' : 'not-editable'}
                          onChange={(e) => handleInputChange({ e, type: 'BRANCH', branchIndex, userIndex })}
                          maxLength={4}
                        />
                        {!branchIsEditable ? (
                          <Icon onClick={(e) => handlePencilClick({ e, type: 'BRANCH', branchIndex, userIndex })}>
                            <FaPencilAlt />
                          </Icon>
                        ) : (
                          <></>
                        )}
                      </TableData>
                      <TableData>
                        {userAccessLevelisEditable ? (
                          <UserAccessLevelSelect onChange={(e) => handleInputChange({ e, type: 'USER ACCESS LEVEL', branchIndex, userIndex })} defaultValue={userAccessLevel}>
                            <UserAccessLevelOption value={'Admin'}>Admin</UserAccessLevelOption>
                            <UserAccessLevelOption value={'Service Manager'}>Service Manager</UserAccessLevelOption>
                            <UserAccessLevelOption value={'Basic'}>Basic</UserAccessLevelOption>
                          </UserAccessLevelSelect>
                        ) : (
                          <>
                            <UserAccessLevel>{userAccessLevel}</UserAccessLevel>
                            {!userAccessLevelisEditable && userAccessLevel !== 'Admin' ? (
                              <Icon onClick={(e) => handlePencilClick({ e, type: 'USER ACCESS LEVEL', branchIndex, userIndex })}>
                                <FaPencilAlt />
                              </Icon>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </TableData>
                    </>
                  ) : (
                    <></>
                  )}
                  <TableData>
                    {changesRequested ? (
                      <Button type='button' onClick={(e) => handleSubmitChanges({ branchIndex, userIndex })}>
                        Submit Changes
                      </Button>
                    ) : (
                      <></>
                    )}
                    <Button type='button' className={deleteConfirmation ? 'delete-confirmation' : ''} onClick={(e) => handleDeleteUser({ branchIndex, userIndex })}>
                      {deleteConfirmation ? 'Confirm Delete' : 'Delete User'}
                    </Button>
                  </TableData>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <NewUserLink to='/add_user'>New User</NewUserLink>
      </Container>
    </>
  );
}
