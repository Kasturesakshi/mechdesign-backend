const db = require('../config/db');

const insertMaterialVendor = (data, callback) => {
  const query = `
    INSERT INTO material_vendor (
      materialName, amountType, materialWeight, amount, dateReceived, materialWeight2,
      vendorName, address, gstNo, vehicleNo, driverName, remark
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.materialName, data.amountType, data.materialWeight, data.amount, data.dateReceived,
    data.materialWeight2, data.vendorName, data.address, data.gstNo, data.vehicleNo,
    data.driverName, data.remark,
  ];

  db.query(query, values, callback);
};

module.exports = { insertMaterialVendor };
