import prisma from "@/app/lib/prisma";

// Get all vendors
export async function GET() {
  try {
    const vendors = await prisma.vendor.findMany();
    return Response.json(vendors);
  } catch (error) {
    return Response.json({ error: "Error fetching vendors" }, { status: 500 });
  }
}

// Create a new vendor
export async function POST(req) {
  try {
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

    if (
      !vendorName ||
      !bankName ||
      !bankAccountNo ||
      !addressLine1 ||
      !city ||
      !country ||
      !zipCode
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const newVendor = await prisma.vendor.create({
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

    return Response.json(newVendor, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error creating vendor" }, { status: 400 });
  }
}
