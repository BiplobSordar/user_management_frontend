import { Link } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";

import { formatDate } from "../../utils/formatDate";

const UserCard = ({ user }) => {
  return (
    <div className="card p-8">
      <div className="flex flex-col items-center gap-4 border-b pb-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-slate-500">{user.email}</p>

            <div className="mt-2">
              <Badge active={user.isActive} />
            </div>
          </div>
        </div>

        <Link to={`/users/${user._id}/edit`}>
          <Button>Edit User</Button>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <InfoItem label="First Name" value={user.firstName} />
        <InfoItem label="Last Name" value={user.lastName} />
        <InfoItem label="Email" value={user.email} />
        <InfoItem label="Age" value={user.age} />
        <InfoItem
          label="Created At"
          value={formatDate(user.createdAt)}
        />
        <InfoItem
          label="Updated At"
          value={formatDate(user.updatedAt)}
        />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-slate-500">
      {label}
    </p>

    <p className="mt-1 text-lg font-semibold text-slate-800">
      {value}
    </p>
  </div>
);

export default UserCard;