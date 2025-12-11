import { useState } from "react";
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  PiggyBank,
  Cloud,
  Gem,
  Rocket,
  ShoppingBasket,
  Headphones,
  Search,
  ChevronRight,
  Home,
  User,
  Settings,
  Menu,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const ShortcutCard = ({
  icon: Icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-3 p-4">
    <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center">
      {Icon}
    </div>
    <p className="text-xs text-gray-300 text-center font-medium">{label}</p>
  </div>
);

const IndexCard = ({
  label,
  value,
  change,
  isPositive,
}: {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex-1">
    <p className="text-xs text-gray-400 mb-2">{label}</p>
    <p
      className={`text-2xl font-bold ${
        isPositive ? "text-destructive-light" : "text-success"
      } mb-2`}
    >
      {value}
    </p>
    <div className="flex items-center gap-1">
      {isPositive ? (
        <ArrowUp className="w-3 h-3 text-destructive-light" />
      ) : (
        <ArrowDown className="w-3 h-3 text-success" />
      )}
      <span
        className={`text-xs ${
          isPositive ? "text-destructive-light" : "text-success"
        }`}
      >
        {change}
      </span>
    </div>
  </div>
);

const StockCard = ({
  symbol,
  price,
  change,
  isPositive,
}: {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}) => (
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
    <p className="text-sm text-gray-300 mb-2">{symbol}</p>
    <p
      className={`text-xl font-bold ${
        isPositive ? "text-destructive-light" : "text-success"
      } mb-2`}
    >
      {price}
    </p>
    <div className="flex items-center justify-center gap-1">
      {isPositive ? (
        <ArrowDown className="w-3 h-3 text-success" />
      ) : (
        <ArrowUp className="w-3 h-3 text-destructive-light" />
      )}
      <span
        className={`text-xs ${isPositive ? "text-success" : "text-destructive-light"}`}
      >
        {change}
      </span>
    </div>
  </div>
);

export default function Index() {
  const [activeTab, setActiveTab] = useState("most-viewed");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-24">
      {/* Status Bar */}
      <div className="bg-gray-900 px-4 py-2 flex justify-between items-center text-xs text-gray-400">
        <span>11:53 K</span>
        <div className="flex gap-1">
          <span>📶</span>
          <span>📡</span>
          <span>5G</span>
          <span>🟢</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-900 px-4 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">張○英先生</span>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Headphones className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Shortcuts Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">捷徑</h2>
            <button className="text-xs text-primary hover:text-primary/80">
              編輯
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 -mx-2">
            <ShortcutCard
              icon={<BarChart3 className="w-6 h-6 text-gray-400" />}
              label="熱門排行"
            />
            <ShortcutCard
              icon={<DollarSign className="w-6 h-6 text-gray-400" />}
              label="匯率"
            />
            <ShortcutCard
              icon={<span className="text-gray-400 font-bold">ETF</span>}
              label="ETF專區"
            />
            <ShortcutCard
              icon={<PiggyBank className="w-6 h-6 text-gray-400" />}
              label="定期定額"
            />
            <ShortcutCard
              icon={<Cloud className="w-6 h-6 text-gray-400" />}
              label="庫存報價"
            />
            <ShortcutCard
              icon={<Gem className="w-6 h-6 text-gray-400" />}
              label="基金"
            />
            <ShortcutCard
              icon={<Rocket className="w-6 h-6 text-gray-400" />}
              label="存股獎勵"
            />
            <ShortcutCard
              icon={<ShoppingBasket className="w-6 h-6 text-gray-400" />}
              label="抽籤/競拍"
            />
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>
        </div>

        {/* Index Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">指數</h2>
            <button className="text-xs text-primary hover:text-primary/80">
              編輯
            </button>
          </div>

          <div className="flex gap-3">
            <IndexCard
              label="加權指數"
              value="28362.38"
              change="179.78 (0.64%)"
              isPositive={true}
            />
            <IndexCard
              label="上檔指數"
              value="264.64"
              change="0.45 (0.17%)"
              isPositive={true}
            />
            <IndexCard
              label="(延)滬深300"
              value="4559.849"
              change="38.374 (0.83%)"
              isPositive={false}
            />
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>
        </div>

        {/* Hot Stocks Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">熱門台股</h2>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-800 mb-4 overflow-x-auto pb-2">
            {[
              { id: "most-viewed", label: "最多人看" },
              { id: "market-strength", label: "大盤強勢" },
              { id: "surging", label: "急拉股" },
              { id: "high-volume", label: "量大股" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm whitespace-nowrap pb-3 ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Stock Cards */}
          <div className="grid grid-cols-3 gap-3">
            <StockCard
              symbol="華邦電"
              price="68.40"
              change="2.90 (4.07%)"
              isPositive={false}
            />
            <StockCard
              symbol="台積電"
              price="1500.00"
              change="20.00 (1.35%)"
              isPositive={true}
            />
            <StockCard
              symbol="績創"
              price="147.00"
              change="2.50 (1.72%)"
              isPositive={false}
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 p-2 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs">首頁</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-300">
            <User className="w-6 h-6" />
            <span className="text-xs">專家</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-300">
            <Settings className="w-6 h-6" />
            <span className="text-xs">自選</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-300">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">交易</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-300">
            <Headphones className="w-6 h-6" />
            <span className="text-xs">行情</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-300">
            <Menu className="w-6 h-6" />
            <span className="text-xs">e帳台</span>
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-24 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all z-40"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Floating Menu */}
      {showMenu && (
        <div className="fixed bottom-40 right-6 bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-2 z-40 min-w-48">
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white text-sm">
              <Menu className="w-4 h-4" />
              <span>選單1</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white text-sm">
              <Settings className="w-4 h-4" />
              <span>選單2</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white text-sm">
              <Search className="w-4 h-4" />
              <span>選單3</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
