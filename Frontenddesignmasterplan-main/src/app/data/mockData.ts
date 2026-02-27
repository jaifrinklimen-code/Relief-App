import { EmergencyData } from "../components/EmergencyCard";

export const mockEmergencies: EmergencyData[] = [
  {
    id: "EMG-001",
    title: "Assam Flood Relief",
    location: "Assam, India",
    category: "Natural Disaster",
    urgency: "High",
    amountNeeded: 500000,
    amountRaised: 215000,
    familiesAffected: 500,
    verified: true,
    beneficiaryWallet: "0x8aF23bd91A72eF...21D",
  },
  {
    id: "EMG-002",
    title: "Chennai Medical Camp",
    location: "Chennai, India",
    category: "Healthcare",
    urgency: "Medium",
    amountNeeded: 350000,
    amountRaised: 110000,
    familiesAffected: 1200,
    verified: true,
    beneficiaryWallet: "0x7bC12cd81B63fA...33E",
  },
  {
    id: "EMG-003",
    title: "Bihar Drought Support",
    location: "Bihar, India",
    category: "Natural Disaster",
    urgency: "High",
    amountNeeded: 450000,
    amountRaised: 89000,
    familiesAffected: 320,
    verified: true,
    beneficiaryWallet: "0x91d45ef92C74bD...FA2",
  },
  {
    id: "EMG-004",
    title: "Delhi Fire Relief",
    location: "Delhi, India",
    category: "Emergency",
    urgency: "Low",
    amountNeeded: 200000,
    amountRaised: 200000,
    familiesAffected: 45,
    verified: true,
    beneficiaryWallet: "0x3cA91bd72E45fC...8B1",
  },
  {
    id: "EMG-005",
    title: "Kerala Landslide Aid",
    location: "Kerala, India",
    category: "Natural Disaster",
    urgency: "High",
    amountNeeded: 600000,
    amountRaised: 380000,
    familiesAffected: 780,
    verified: true,
    beneficiaryWallet: "0x5dE23cd91F82eA...9C2",
  },
  {
    id: "EMG-006",
    title: "Mumbai School Rebuild",
    location: "Mumbai, India",
    category: "Education",
    urgency: "Medium",
    amountNeeded: 280000,
    amountRaised: 156000,
    familiesAffected: 450,
    verified: true,
    beneficiaryWallet: "0x9fB45ef82D91cB...4D3",
  },
];

export interface Transaction {
  txHash: string;
  donorWallet: string;
  beneficiaryWallet: string;
  amount: string;
  timestamp: string;
  status: "Completed" | "Pending" | "Failed";
  emergencyTitle?: string;
}

export const mockTransactions: Transaction[] = [
  {
    txHash: "0x91ad...f21c",
    donorWallet: "0xAb3...91D",
    beneficiaryWallet: "0x8aF...21D",
    amount: "0.05 ETH",
    timestamp: "26 Feb 2026",
    status: "Completed",
    emergencyTitle: "Assam Flood Relief",
  },
  {
    txHash: "0x7bc...aa19",
    donorWallet: "0x12C...44F",
    beneficiaryWallet: "0x8aF...21D",
    amount: "0.02 ETH",
    timestamp: "26 Feb 2026",
    status: "Completed",
    emergencyTitle: "Assam Flood Relief",
  },
  {
    txHash: "0x3de...bb28",
    donorWallet: "0x9eF...77A",
    beneficiaryWallet: "0x7bC...33E",
    amount: "0.03 ETH",
    timestamp: "25 Feb 2026",
    status: "Completed",
    emergencyTitle: "Chennai Medical Camp",
  },
  {
    txHash: "0x8cf...dd37",
    donorWallet: "0x4aB...22C",
    beneficiaryWallet: "0x91d...FA2",
    amount: "0.01 ETH",
    timestamp: "25 Feb 2026",
    status: "Completed",
    emergencyTitle: "Bihar Drought Support",
  },
  {
    txHash: "0x2ae...cc46",
    donorWallet: "0x6dE...88B",
    beneficiaryWallet: "0x5dE...9C2",
    amount: "0.08 ETH",
    timestamp: "24 Feb 2026",
    status: "Completed",
    emergencyTitle: "Kerala Landslide Aid",
  },
];

export interface DonationHistory {
  date: string;
  emergency: string;
  amount: string;
  txHash: string;
  status: "Confirmed" | "Pending";
}

export const mockDonationHistory: DonationHistory[] = [
  {
    date: "24 Feb 2026",
    emergency: "Assam Floods",
    amount: "0.03 ETH",
    txHash: "0x91ad...f21c",
    status: "Confirmed",
  },
  {
    date: "22 Feb 2026",
    emergency: "Chennai Medical Camp",
    amount: "0.02 ETH",
    txHash: "0x7bc...aa19",
    status: "Confirmed",
  },
  {
    date: "20 Feb 2026",
    emergency: "Kerala Landslide Aid",
    amount: "0.05 ETH",
    txHash: "0x3de...bb28",
    status: "Confirmed",
  },
];

export interface Request {
  id: string;
  title: string;
  status: "Pending" | "Approved" | "Rejected" | "Funded";
  submittedOn: string;
  fundsReceived?: number;
  peopleAffected: number;
  requiredFunds: number;
  wallet: string;
  documents?: string;
}

export const mockRequests: Request[] = [
  {
    id: "REQ-101",
    title: "Bihar Flood Support",
    status: "Pending",
    submittedOn: "25 Feb 2026",
    peopleAffected: 320,
    requiredFunds: 450000,
    wallet: "0x91d...FA2",
    documents: "Uploaded",
  },
  {
    id: "REQ-099",
    title: "Assam Flood Relief",
    status: "Approved",
    submittedOn: "21 Feb 2026",
    fundsReceived: 215000,
    peopleAffected: 500,
    requiredFunds: 500000,
    wallet: "0x8aF...21D",
  },
  {
    id: "REQ-097",
    title: "Chennai Medical Camp",
    status: "Funded",
    submittedOn: "18 Feb 2026",
    fundsReceived: 110000,
    peopleAffected: 1200,
    requiredFunds: 350000,
    wallet: "0x7bC...33E",
  },
];

export const platformStats = {
  totalFundsRaised: 1240000,
  livesImpacted: 3250,
  activeEmergencies: 6,
  emergenciesResolved: 14,
  totalDonations: 5200000,
  familiesHelped: 8200,
  avgFundDeliveryTime: "3.2 hrs",
};
