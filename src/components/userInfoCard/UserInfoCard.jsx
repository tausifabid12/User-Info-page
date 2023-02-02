import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const UserInfoCard = ({ data }) => {
  const [open, setOpen] = useState(0);

  const { email, name, address, company, username, phone } = data;

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.6 },
  };

  return (
    <section className="w-full bg-white lg:m-10 shadow-md px-2  md:px-5 py-8 rounded-lg border-t">
      <Accordion open={open === 1} icon={''} animate={customAnimation}>
        <AccordionHeader className="border-b-0 text-sm lg:text-md ">
          <div className="flex   justify-between items-center flex-grow">
            <div>
              <p className="text-xs lg:text-md font-semibold ">
                {company?.name}
              </p>
            </div>
            <div>
              <p className="text-sm lg:text-md font-semibold text-gray-900">
                Contact
              </p>
              <p className="text-xs lg:text-md  font-normal">{name}</p>
            </div>
            <div className="hidden md:block">
              <p className="text-sm lg:text-md font-semibold text-gray-900">
                City
              </p>
              <p className="text-xs lg:text-md  font-normal">{address?.city}</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm lg:text-md  font-semibold text-gray-900">
                State
              </p>
              <p className="text-xs lg:text-md  font-normal">
                {address?.street}
              </p>
            </div>
            <div>
              <button
                className="p-1 lg:p-3 bg-red-600 text-white rounded-lg text-xs"
                onClick={() => handleOpen(1)}
              >
                {open ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="py-8 px-12 border border-gray-300 rounded-lg">
            <div className="pb-10">
              <h5 className="text-gray-900 font-bold text-sm lg:text-md">
                Description
              </h5>
              <p className="text">{company?.catchPhrase}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div>
                <ul className="list-none">
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Contact Person
                    </p>
                    <p>{name}</p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Designation
                    </p>
                    <p>{username}</p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Email
                    </p>
                    <p>{email}</p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Phone
                    </p>
                    <p>{phone}</p>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <ul className="list-none">
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Address
                    </p>
                    <p>
                      {address?.city}, {address?.street}, {address?.suite}
                    </p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      City
                    </p>
                    <p>{address?.city}</p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      State
                    </p>
                    <p>{address?.street}</p>
                  </li>
                  <li>
                    <p className="text-sm lg:text-md font-bold text-gray-900">
                      Country
                    </p>
                    <p>{address?.city}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </section>
  );
};

export default UserInfoCard;
