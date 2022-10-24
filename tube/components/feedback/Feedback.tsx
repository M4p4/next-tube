import Alert from '@ui/Alert';
import DropDown from '@ui/Dropdown';
import Modal from '@ui/Modal';
import TextInput from '@ui/TextInput';
import React, { FC, useState } from 'react';
import { FeedbackSubject } from 'types/types';

type Props = {
  onClose: () => void;
  showModal: boolean;
};

const defaultItem = 'copyright';

const items = [
  {
    label: 'DMCA / Copyright Infringement',
    query: defaultItem,
  },
  {
    label: 'Broken Video',
    query: 'broken',
  },
  {
    label: 'Inappropriate content',
    query: 'age',
  },
  {
    label: 'Support / Feedback',
    query: 'others',
  },
];

const defaultFeedback = {
  email: '',
  message: '',
  subject: defaultItem,
  error: '',
  success: '',
};

const Feedback: FC<Props> = ({ showModal, onClose }) => {
  const [feedback, setFeedback] = useState(defaultFeedback);

  const updateDropdown = (newQuery: string | null) => {
    updateFeedback({ subject: newQuery as FeedbackSubject });
  };

  const updateFeedback = (data: any) => {
    setFeedback((currentFeedback) => {
      return { ...currentFeedback, ...data };
    });
  };

  const submitFeedback = async () => {
    try {
      updateFeedback({ success: '', error: '' });
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });
      const data = await response.json();
      if (data?.success)
        updateFeedback({ success: 'Thank you for your feedback!' });
      else updateFeedback({ error: data.message || 'Something went wrong!' });
    } catch (err: any) {
      console.error(err);
    }
  };

  const { error, success, subject, message, email } = feedback;

  return (
    <Modal title={'Feedback'} isShowing={showModal} onClose={onClose}>
      <>
        <div className="flex flex-col">
          <div className="text-left">
            <Alert message={error} alertType="danger" />
            <Alert message={success} alertType="success" />
            <span className="font-semibold my-1">Subject</span>
            <DropDown
              items={items}
              selectedQuery={subject}
              updateFilterQuery={updateDropdown}
            />
            <TextInput
              label="E-Mail"
              value={email}
              placeholder={'Your E-Mail...'}
              handleChange={(e) => {
                updateFeedback({ email: e.target.value });
              }}
            />
            <span className="font-semibold my-1">Message</span>
            <textarea
              style={{ resize: 'none' }}
              className="w-full dark:bg-slate-800 bg-white focus:outline-none rounded-md p-2"
              rows={5}
              cols={5}
              value={message}
              placeholder={`Enter message, please don't forget video id.`}
              onChange={(e) => {
                updateFeedback({ message: e.target.value });
              }}
            />

            <button
              onClick={submitFeedback}
              className="bg-indigo-600 w-full rounded-md p-2 text-gray-100 hover:bg-indigo-500"
            >
              Send
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default Feedback;
