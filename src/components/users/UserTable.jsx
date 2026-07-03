import { Link } from "react-router-dom";

import Badge from "../common/Badge";
import Button from "../common/Button";

import { formatDate } from "../../utils/formatDate";

const UserTable = ({
  users,
  onDelete,
}) => {
  return (
    <div className="card overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Age</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Created</th>
            <th className="px-5 py-3 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-t"
            >
              <td className="px-5 py-4">
                {user.firstName} {user.lastName}
              </td>

              <td className="px-5 py-4">
                {user.email}
              </td>

              <td className="px-5 py-4">
                {user.age}
              </td>

              <td className="px-5 py-4">
                <Badge
                  active={user.isActive}
                />
              </td>

              <td className="px-5 py-4">
                {formatDate(
                  user.createdAt
                )}
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-end gap-2">
                  <Link
                    to={`/users/${user._id}`}
                  >
                    <Button variant="secondary">
                      View
                    </Button>
                  </Link>

                  <Link
                    to={`/users/${user._id}/edit`}
                  >
                    <Button>
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() =>
                      onDelete(user)
                    }
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;