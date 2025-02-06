import prisma from "@/app/lib/prisma";

// Get a single vendor
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const vendor = await prisma.vendor.findUnique({
      where: { id: Number(id) },
    });

    if (!vendor)
      return Response.json({ error: "Vendor not found" }, { status: 404 });

    return Response.json(vendor);
  } catch (error) {
    return Response.json({ error: "Error fetching vendor" }, { status: 500 });
  }
}

// Update a vendor
export async function PUT(req, { params }) {
  const { id } = params;
  const {
    vendorName,
    bankName,
    bankAccountNo,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  } = await req.json();

  try {
    const updatedVendor = await prisma.vendor.update({
      where: { id: Number(id) },
      data: {
        vendorName,
        bankName,
        bankAccountNo,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      },
    });

    return Response.json(updatedVendor);
  } catch (error) {
    return Response.json({ error: "Error updating vendor" }, { status: 500 });
  }
}

// Delete a vendor
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await prisma.vendor.delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Vendor deleted successfully" });
  } catch (error) {
    return Response.json({ error: "Error deleting vendor" }, { status: 500 });
  }
}
