import React from 'react';
import Table from './Table';

export default function Tabledata() {
  const columns = [
    { Header: 'Factor', accessor: 'Factor' },
    { Header: 'AES', accessor: 'AES' },
    { Header: 'DES', accessor: 'DES' },
    { Header: '3DES', accessor: 'tDES' },
    { Header: 'Blowfish', accessor: 'Blowfish'  },
  ];

  const data = [
    { Factor: "Security", AES: 'Highly secure', DES: "Vulnerable due to short key", tDES: 'More secure than DES, but slow', Blowfish: "Strong security" },

    { Factor: "Key Length", AES: '128,192,256 bits', DES: "56 bits", tDES: '112 or 168 bits', Blowfish: "32 to 448 bits" },

    { Factor: "Performance", AES: 'Fast and efficient', DES: "Slower than AES", tDES: 'Slower due to multiple encryption', Blowfish: "Reasonably fast" },

    { Factor: "Adoption", AES: 'Widely Adopted', DES: "Widely used historically", tDES: 'Used in legacy systems', Blowfish: "Widely recognised" },

    { Factor: "Resource Use", AES: 'Moderate', DES: "Moderate", tDES: 'Higher due to multiple encryption', Blowfish: "Moderate" },

    { Factor: "Flexibility", AES: 'Fixed block size(128bit)', DES: "Fixed block size(64bit)", tDES: 'Fixed block size(64bit)', Blowfish: "Variable block size" },

    { Factor: "Key Management", AES: 'Secure and manageable', DES: "Less security dur to short key", tDES: 'Complex due to multiple keys', Blowfish: "Moderate" },

    { Factor: "Compatiblity", AES: 'Widely compatible', DES: "Compatiblity issues may arises", tDES: 'Compatiblity issues in some systems', Blowfish: "Moderate" },

  ];

  return (
    <div className="p-10 bg-gradient-to-br from-sky-800 to-emerald-600  w-full">
      <Table columns={columns} data={data} />
    </div>
  );
};

