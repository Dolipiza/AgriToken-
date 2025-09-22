import { useState } from "react";
import {
  ArrowRight,
  Leaf,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("investor");

  const farmCards = [
    {
      id: 1,
      name: "Green Valley Organic Farm",
      location: "Kenya",
      cropType: "Coffee",
      fundingGoal: 50000,
      currentFunding: 32000,
      roi: "18%",
      riskLevel: "Low",
      image:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
      farmer: "John Mwangi",
    },
    {
      id: 2,
      name: "Sunrise Maize Plantation",
      location: "Nigeria",
      cropType: "Maize",
      fundingGoal: 25000,
      currentFunding: 18500,
      roi: "15%",
      riskLevel: "Medium",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      farmer: "Amina Hassan",
    },
    {
      id: 3,
      name: "Highland Tea Estate",
      location: "Rwanda",
      cropType: "Tea",
      fundingGoal: 75000,
      currentFunding: 45000,
      roi: "22%",
      riskLevel: "Low",
      image:
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop",
      farmer: "Marie Uwimana",
    },
  ];

  const stats = [
    { label: "Farmers Funded", value: "2,847", icon: Users },
    { label: "Total Invested", value: "$12.4M", icon: TrendingUp },
    { label: "Average ROI", value: "18.5%", icon: Star },
    { label: "Countries", value: "15", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://ucarecdn.com/b791e692-4e5e-45c9-b911-7f217da9bf49/-/format/auto/"
                alt="AgriToken Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-[#2C2C2C]">
                AgriToken
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#marketplace"
                className="text-gray-700 hover:text-[#27AE60] transition-colors"
              >
                Marketplace
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-[#27AE60] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#27AE60] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#27AE60] transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-[#27AE60] border border-[#27AE60] rounded-lg hover:bg-[#27AE60] hover:text-white transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-[#27AE60] text-white rounded-lg hover:bg-[#1e8449] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#27AE60] to-[#1e8449] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Powered by Hedera
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Invest in Farms.
                <br />
                Empower Farmers.
                <br />
                <span className="text-[#D3E534]">Earn Returns.</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Tokenize agricultural investments and create sustainable income
                streams for farmers worldwide through blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#D3E534] text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4d62a] transition-colors flex items-center justify-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Start Investing
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#27AE60] transition-colors flex items-center justify-center">
                  <Leaf className="mr-2 h-5 w-5" />
                  Support Farmers
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop"
                alt="Farmer in field"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#27AE60] p-3 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C]">
                      Blockchain Secured
                    </p>
                    <p className="text-gray-600 text-sm">
                      Transparent & Trustless
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <stat.icon className="h-8 w-8 text-[#27AE60] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#2C2C2C] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
              How AgriToken Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your role and start participating in the future of
              agricultural finance
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("investor")}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === "investor"
                    ? "bg-[#27AE60] text-white"
                    : "text-gray-600 hover:text-[#27AE60]"
                }`}
              >
                💼 For Investors
              </button>
              <button
                onClick={() => setActiveTab("farmer")}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === "farmer"
                    ? "bg-[#27AE60] text-white"
                    : "text-gray-600 hover:text-[#27AE60]"
                }`}
              >
                👨🏾‍🌾 For Farmers
              </button>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {activeTab === "investor" ? (
              <>
                <div className="text-center">
                  <div className="bg-[#27AE60] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Connect Wallet</h3>
                  <p className="text-gray-600">
                    Sign up with your Hedera wallet (HashPack or Blade)
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#27AE60] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Browse Farms</h3>
                  <p className="text-gray-600">
                    Explore verified farms with detailed information and ROI
                    projections
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#27AE60] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Invest</h3>
                  <p className="text-gray-600">
                    Buy fractional farm tokens with crypto or mobile money
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#27AE60] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Earn Returns</h3>
                  <p className="text-gray-600">
                    Receive profit distributions from harvest sales
                    automatically
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="bg-[#D3E534] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2C2C2C] font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Register Farm</h3>
                  <p className="text-gray-600">
                    Create profile and upload verification documents
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#D3E534] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2C2C2C] font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Tokenization</h3>
                  <p className="text-gray-600">
                    Farm assets are converted into digital shares on Hedera
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#D3E534] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2C2C2C] font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Get Funded</h3>
                  <p className="text-gray-600">
                    Receive investments from global investors instantly
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#D3E534] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#2C2C2C] font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Share Profits</h3>
                  <p className="text-gray-600">
                    Distribute harvest profits via smart contracts
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Farm Marketplace Preview */}
      <section id="marketplace" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
              Featured Farm Investments
            </h2>
            <p className="text-xl text-gray-600">
              Discover verified farms ready for investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {farmCards.map((farm) => (
              <div
                key={farm.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-[#2C2C2C]">
                        {farm.name}
                      </h3>
                      <p className="text-gray-600">
                        {farm.location} • {farm.cropType}
                      </p>
                      <p className="text-sm text-gray-500">by {farm.farmer}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        farm.riskLevel === "Low"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {farm.riskLevel} Risk
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Funding Progress</span>
                      <span>
                        {Math.round(
                          (farm.currentFunding / farm.fundingGoal) * 100,
                        )}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#27AE60] h-2 rounded-full"
                        style={{
                          width: `${(farm.currentFunding / farm.fundingGoal) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-600">
                      <span>
                        ${farm.currentFunding.toLocaleString()} raised
                      </span>
                      <span>${farm.fundingGoal.toLocaleString()} goal</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-[#27AE60]">
                        {farm.roi}
                      </span>
                      <span className="text-gray-600 text-sm ml-1">
                        Expected ROI
                      </span>
                    </div>
                    <button className="bg-[#27AE60] text-white px-6 py-2 rounded-lg hover:bg-[#1e8449] transition-colors flex items-center">
                      Invest Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#2C2C2C] text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              View All Farms
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">
                Creating Real Impact
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                AgriToken bridges the gap between farmers who need capital and
                investors seeking meaningful returns while supporting
                sustainable agriculture.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#27AE60] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Transparent Investments
                    </h3>
                    <p className="text-gray-600">
                      Blockchain technology ensures complete transparency in
                      fund allocation and profit distribution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#27AE60] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Farmer Empowerment
                    </h3>
                    <p className="text-gray-600">
                      Direct access to global capital without traditional
                      banking barriers or excessive collateral requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#27AE60] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Sustainable Returns
                    </h3>
                    <p className="text-gray-600">
                      Earn competitive returns while supporting sustainable
                      farming practices and food security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
                alt="Sustainable farming"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-[#D3E534] p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2C2C2C]">🌟</div>
                  <p className="font-semibold text-[#2C2C2C] mt-2">
                    Impact Score
                  </p>
                  <p className="text-sm text-gray-600">
                    Earn badges for sustainable investing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#27AE60] to-[#1e8449]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of investors and farmers already using AgriToken to
            create sustainable wealth and food security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#D3E534] text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4d62a] transition-colors">
              Start Investing Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#27AE60] transition-colors">
              Register Your Farm
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://ucarecdn.com/b791e692-4e5e-45c9-b911-7f217da9bf49/-/format/auto/"
                  alt="AgriToken Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold">AgriToken</span>
              </div>
              <p className="text-gray-400">
                Democratizing agricultural investment through blockchain
                technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hedera Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Smart Contracts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 AgriToken. All rights reserved. Powered by Hedera.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}