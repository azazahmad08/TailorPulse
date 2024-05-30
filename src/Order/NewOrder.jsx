import { useState } from 'react';

const NewOrder = () => {
  const [formData, setFormData] = useState({
    orderNo: '',
    referenceId: 0,
    referenceNo: '',
    orderStatus: '',
    discountAmount: 0,
    grandTotal: 0,
    subTotal: 0,
    previousDue: 0,
    paidAmount: 0,
    due: 0,
    orderDate: '',
    trailDate: '',
    deliveryDate: '',
    customerId: 0,
    serviceById: 0,
    customerMobile: '',
    customerName: '',
    deliveryAddress: '',
    sewingOrderDtl: [
      {
        deliveryStatus: '',
        trailDate: '',
        deliveryDate: '',
        discountAmount: 0,
        quantity: 0,
        serviceCharge: 0,
        total: 0,
        remarks: '',
        itemId: 0,
        cuttingMasterId: 0,
        sewingMasterId: 0,
        measurementAttributeValue: [
          {
            attributeType: '',
            name: '',
            numericalValue: 0,
            textValue: '',
            measurementAttributeId: 0,
            itemId: 0,
          },
        ],
        sewingDesignDtl: [
          {
            name: '',
            designId: 0,
          },
        ],
      },
    ],
  });

  const handleChange = (e, section, index, nestedSection, nestedIndex) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (section && nestedSection !== undefined) {
        const updatedSection = prevData[section].map((item, idx) => {
          if (idx === index) {
            const updatedNestedSection = item[nestedSection].map((nestedItem, nestedIdx) => {
              if (nestedIdx === nestedIndex) {
                return {
                  ...nestedItem,
                  [name]: value,
                };
              }
              return nestedItem;
            });
            return {
              ...item,
              [nestedSection]: updatedNestedSection,
            };
          }
          return item;
        });
        return {
          ...prevData,
          [section]: updatedSection,
        };
      } else if (section) {
        const updatedSection = prevData[section].map((item, idx) => {
          if (idx === index) {
            return {
              ...item,
              [name]: value,
            };
          }
          return item;
        });
        return {
          ...prevData,
          [section]: updatedSection,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await fetch('http://103.89.240.204:5000/api/v1/SewingOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id: 0, // Ensure id is a number
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      alert('Order information submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting order information');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Order</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          if (Array.isArray(formData[key])) {
            if (key === 'sewingOrderDtl') {
              return (
                <div key={key} className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Sewing Order Details</h2>
                  {formData[key].map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-4 p-4 border rounded">
                      {Object.keys(detail).map((detailKey) => {
                        if (Array.isArray(detail[detailKey])) {
                          return (
                            <div key={detailKey} className="mb-4">
                              <h3 className="text-lg font-semibold mb-2">
                                {detailKey.charAt(0).toUpperCase() + detailKey.slice(1)}
                              </h3>
                              {detail[detailKey].map((nestedDetail, nestedDetailIndex) => (
                                <div key={nestedDetailIndex} className="mb-2 p-2 border rounded">
                                  {Object.keys(nestedDetail).map((nestedKey) => (
                                    <div key={nestedKey} className="mb-2">
                                      <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor={`${detailKey}-${nestedDetailIndex}-${nestedKey}`}
                                      >
                                        {nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}
                                      </label>
                                      <input
                                        id={`${detailKey}-${nestedDetailIndex}-${nestedKey}`}
                                        name={nestedKey}
                                        type="text"
                                        value={nestedDetail[nestedKey]}
                                        onChange={(e) =>
                                          handleChange(
                                            e,
                                            'sewingOrderDtl',
                                            detailIndex,
                                            detailKey,
                                            nestedDetailIndex
                                          )
                                        }
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      />
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return (
                          <div key={detailKey} className="mb-2">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor={`${key}-${detailIndex}-${detailKey}`}
                            >
                              {detailKey.charAt(0).toUpperCase() + detailKey.slice(1)}
                            </label>
                            <input
                              id={`${key}-${detailIndex}-${detailKey}`}
                              name={detailKey}
                              type="text"
                              value={detail[detailKey]}
                              onChange={(e) => handleChange(e, 'sewingOrderDtl', detailIndex)}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              );
            }
          } else {
            return (
              <div className="mb-4" key={key}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={formData[key]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            );
          }
        })}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrder;
