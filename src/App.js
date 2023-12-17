import { useState } from 'react';

const Home = ({ hasAddresses = false, wallet = '' }) => {
  const [walletInput, setwallet] = useState(wallet);

  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };

  return (
    <div className="w-full bg-white">
      {hasAddresses ? (
        <form className="m-4 p-2 rounded">
          <div className="mb-4 flex flex-col items-center">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="name"
            >
              Input a Wallet Address
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
              id="name"
              maxLength={42}
              type="text"
              value={walletInput}
              onChange={setter(setwallet)}
            />
            <button className="rounded-md bg-teal-200 p-3 m-2 w-3/4 text-center">
              Check Eligibility
            </button>
          </div>
        </form>
      ) : (
        <form class="flex items-center p-3 m-3">
          <div class="shrink-0 p-3">
            <img
              class="h-8 w-8 object-cover rounded-full"
              src="https://liba.ro/619rnu273"
              alt="Current profile photo"
            />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
            />
          </label>
        </form>
      )}
    </div>
  );
};

const ToggleUIComponent = ({ onClick, status }) => (
  <div class="inline-flex p-3 m-3">
    <button
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      onClick={onClick}
    >
      {!status ? 'Create Airdrop' : 'Check wallet'}
    </button>
  </div>
);
const App = ({
  title = 'Airdrop Address Merkelizer',
  description = 'Check for eligibility or create your own campaign.',
}) => {
  const [state, setState] = useState(false);

  const onClick = _ => setState(!state);
  console.log('stateL', { state });

  return (
    <div className="flex h-screen items-center justify-around bg-blue-300 font-josefin">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">{title}</h1>
        <p className="text-blue-800 text-lg text-bold">{description}</p>
        <div className="flex flex-col items-center bg-cyan-200 shadow-lg p-3 m-3">
          <ToggleUIComponent onClick={onClick} status={state} />
          <div className="shadow-lg bg-teal-100 rounded m-3 p-4">
            <div className="flex flex-col p-2">
              <Home hasAddresses={!state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
