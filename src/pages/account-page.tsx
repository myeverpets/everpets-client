// AccountPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import User_photo from '../assets/user.png';
import Pencil from '../assets/pencil.png';
import Dots from '../assets/tree_dots.png';
import Modal from '../elements/modal';

const AccountPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleEditClick = (type: string) => {
    if (type === 'edit4') {
      // Open file input for photo selection
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.addEventListener('change', (event) => handlePhotoChange(event));
      fileInput.click();
    } else {
      setModalType(type);
      setShowModal(true);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target?.result as string;
        setSelectedPhoto(dataURL);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
  };

  // const handleConfirmDelete = () => {
  //   console.log('Account deleted!');
  //   setShowModal(false);
  // };

  const handleDotClick = () => {
    console.log('Dot clicked');
  };

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
  };

  const handleSignOutClick = () => {
    console.log('Sign out button clicked');
  };

  return (
    <div className="w-[1440px] h-[844px] relative bg-white">
      <Link to={'/'}>
        <img
          className="w-[204.29px] h-[70px] left-[79px] top-[19px] absolute"
          src={Logo}
          alt="Logo"
        />
      </Link>
      <div className="left-[631px] top-[25px] absolute text-center text-black text-[25px] font-bold font-raleway">
        My account
      </div>
      <div className="w-[525px] h-[200px] left-[458px] top-[100px] absolute">
        <div className="w-[150px] h-[150px] left-0 top-0 absolute">
          <img
            className="left-0 top-0 absolute rounded-full"
            src={selectedPhoto || User_photo}
            alt="User"
          />
          <button onClick={() => handleEditClick('edit4')}>
            <div className="w-[30px] h-[30px] left-[115px] top-[12px] absolute bg-white rounded-full border border-black border-opacity-10" />
            <img
              className="w-5 h-5 left-[120px] top-[17px] absolute"
              src={Pencil}
              alt="Pencil"
            />
          </button>
        </div>
        <div className="left-[180px] top-[50px] absolute text-center text-black text-[25px] font-bold font-raleway">
          John Doe
        </div>
        <div className="left-[180px] top-[100px] absolute text-center text-black text-[20px] font-medium font-raleway">
          I love dogs!!!
        </div>
        <div className="w-[100px] h-2 left-[483px] top-[0px] absolute">
          <button
            className="w-[40px] left-[2px] top-[0px] absolute bg-transparent border-none"
            onClick={handleDotClick}
          >
            <img className="w-full h-full" src={Dots} alt="Dots" />
          </button>
        </div>
      </div>
      <div className="w-[819px] h-[337px] left-[310px] top-[250px] absolute bg-black bg-opacity-0 rounded-[20px]">
        <div className="left-[53px] top-[29px] absolute flex-col justify-center items-start gap-1 inline-flex">
          <div className="text-black text-lg font-medium font-raleway">
            Phone
          </div>
          <div className="text-black text-lg font-bold font-raleway">
            +380502115487
          </div>
        </div>
        <div className="left-[53px] top-[104px] absolute flex-col justify-center items-start gap-1 inline-flex">
          <div className="text-black text-lg font-medium font-raleway">
            Email
          </div>
          <div className="text-black text-lg font-bold font-raleway">
            vasyapupkintop4ik@gmail.com
          </div>
        </div>
        <div className="left-[53px] top-[179px] absolute flex-col justify-center items-start gap-[11px] inline-flex">
          <div className="text-black text-lg font-medium font-raleway">
            Password
          </div>
          <div className="text-black text-2xl font-bold font-raleway">
            *********
          </div>
        </div>
        <button
          className="w-[86px] h-[41px] left-[685px] top-[32px] absolute bg-red-600 rounded-[5px]"
          onClick={() => handleEditClick('edit1')}
        >
          <div className="left-[27px] top-[11px] absolute text-center text-white text-base font-bold font-raleway tracking-wide">
            Edit
          </div>
        </button>
        <button
          className="w-[86px] h-[41px] left-[685px] top-[114px] absolute bg-red-600 rounded-[5px]"
          onClick={() => handleEditClick('edit2')}
        >
          <div className="left-[27px] top-[11px] absolute text-center text-white text-base font-bold font-raleway tracking-wide">
            Edit
          </div>
        </button>
        <button
          className="w-[86px] h-[41px] left-[685px] top-[196px] absolute bg-red-600 rounded-[5px]"
          onClick={() => handleEditClick('edit3')}
        >
          <div className="left-[27px] top-[11px] absolute text-center text-white text-base font-bold font-raleway tracking-wide">
            Edit
          </div>
        </button>
        <button
          className="w-[185px] left-[296px] top-[275px] absolute rounded-[5px]"
          onClick={handleDeleteClick}
        >
          <div className="left-[28px] top-[-3px] absolute text-red-600 text-lg font-bold font-raleway tracking-wide">
            Delete account
          </div>
        </button>
      </div>
      <button
        className="w-[110px] h-[50px] left-[650px] top-[570px] absolute rounded-[15px] border border-black"
        onClick={handleSignOutClick}
      >
        <div className="w-[113px] h-[50px] left-[-3px] top-3 absolute text-center text-black text-base font-bold font-raleway tracking-wide">
          Sign out
        </div>
      </button>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="text-center text-red-600 text-4xl font-bold font-raleway">
          Warning
        </div>
        <div className="text-black text-2xl font-medium font-raleway">
          {modalType === 'edit1' && 'Enter new number:'}
          {modalType === 'edit2' && 'Enter new email:'}
          {modalType === 'edit3' && 'Enter old and new passwords:'}
        </div>
        {modalType && (
          <div>
            <input type="text" placeholder="New Value" />
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleCloseModal}>Submit</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AccountPage;
