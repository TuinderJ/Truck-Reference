import { FaPencilAlt } from 'react-icons/fa';
import { Button, Container, Icon, Input, Table, TableBody, TableData, TableHeader, TableHeaderGroup, TableRow, UserAccessLevelOption, UserAccessLevelSelect } from './style';
import { UserManagementInputChange, UserManagementPencilClick } from '../types';
import { useState } from 'react';
import auth from '../../utils/auth';

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
            userAccessLevel: 'admin',
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
          },
          {
            name: 'Robert Elliott',
            nameIsEditable: false,
            email: 'elliottr@rushenterprises.com',
            emailIsEditable: false,
            userAccessLevel: 'serviceManager',
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
          },
          {
            name: 'Jeff Thomas',
            nameIsEditable: false,
            email: 'thomasj@rushenterprises.com',
            emailIsEditable: false,
            userAccessLevel: 'basic',
            branch: 7039,
            branchIsEditable: false,
            changesRequested: false,
          },
        ],
      },
    ],
  });

  const handlePencilClick = ({ e, type, branchIndex, userIndex }: UserManagementPencilClick): void => {
    const target = e.currentTarget as HTMLElement;
    target.style.display = 'none';
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
      case 'USER ACCESS LEVEL':
        newUserData.branches[branchIndex].users[userIndex].userAccessLevel = target.value;
        break;
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
              branch.users.map(({ name, nameIsEditable, email, emailIsEditable, userAccessLevel, changesRequested }, userIndex) => (
                <TableRow key={userIndex}>
                  <TableData>
                    <Input type='text' value={name} readOnly={nameIsEditable} className={nameIsEditable ? 'editable' : 'not-editable'} onChange={(e) => handleInputChange({ e, type: 'NAME', branchIndex, userIndex })} />
                    <Icon onClick={(e) => handlePencilClick({ e, type: 'NAME', branchIndex, userIndex })}>
                      <FaPencilAlt />
                    </Icon>
                  </TableData>
                  <TableData>
                    <Input type='email' value={email} readOnly={emailIsEditable} className={emailIsEditable ? 'editable' : 'not-editable'} onChange={(e) => handleInputChange({ e, type: 'EMAIL', branchIndex, userIndex })} />
                    <Icon onClick={(e) => handlePencilClick({ e, type: 'EMAIL', branchIndex, userIndex })}>
                      <FaPencilAlt />
                    </Icon>
                  </TableData>
                  {auth.isAdmin() ? (
                    <>
                      <TableData>
                        <Input type='text' value={branch.branch} onChange={(e) => handleInputChange({ e, type: 'BRANCH', branchIndex, userIndex })} />
                      </TableData>
                      <TableData>
                        <UserAccessLevelSelect onChange={(e) => handleInputChange({ e, type: 'USER ACCESS LEVEL', branchIndex, userIndex })} defaultValue={userAccessLevel}>
                          <UserAccessLevelOption value={'admin'}>Admin</UserAccessLevelOption>
                          <UserAccessLevelOption value={'serviceManager'}>Service Manager</UserAccessLevelOption>
                          <UserAccessLevelOption value={'basic'}>Basic</UserAccessLevelOption>
                        </UserAccessLevelSelect>
                      </TableData>
                    </>
                  ) : (
                    <></>
                  )}
                  <TableData>
                    {changesRequested ? <Button type='button'>Submit Changes</Button> : <></>}
                    <Button type='button'>Delete User</Button>
                  </TableData>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
