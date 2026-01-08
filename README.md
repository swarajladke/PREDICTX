<div align="center"> 
  <br /> 
  <h1>📈 PredictX</h1> 
  <p><strong>AI-Powered Stock Market Dashboard with Real-Time Analytics & Intelligent Alerts</strong></p> 
  <br /> 
  </div> 
 
## 🚀 Overview 
 
**PredictX** is a modern, full-stack stock market tracking application built with Next.js, featuring real-time market data, personalized alerts, AI-driven insights, and an intuitive dashboard. Track your favorite stocks, set price alerts, explore detailed company insights, and stay ahead of market trends with intelligent analytics. 
 
## ✨ Features 
 
### 📊 **Real-Time Market Dashboard** 
- Interactive TradingView charts and widgets 
- Market overview with sector performance 
- Stock heatmap visualization 
- Real-time market quotes and news timeline 
- Responsive design optimized for all devices 
 
### 🔔 **Smart Alerts & Watchlists** 
- Create personalized watchlists for your favorite stocks 
- Set custom price alerts (upper/lower thresholds) 
- Email notifications via Resend integration 
- Volume spike detection and alerts 
 
### 🤖 **AI-Powered Insights** 
- Personalized welcome emails with AI-generated content 
- Daily market news summaries powered by Gemini AI 
- Intelligent stock analysis and recommendations 
- Sentiment analysis for market trends 
 
### 🎨 **Modern UI/UX** 
- Beautiful dark theme with glassmorphic design 
- Smooth animations and transitions 
- Floating card layouts with hover effects 
- Professional gradient branding 
 
### 🔐 **Authentication & Security** 
- Secure authentication with Better Auth 
- User profile management 
- Protected routes and session management 
 
## 🛠️ Tech Stack 
 
### **Frontend** 
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router 
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development 
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling 
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful, accessible components 
- **[TradingView Widgets](https://www.tradingview.com/widget-docs/)** - Professional charts and market data 
 
### **Backend & Services** 
- **[Better Auth](https://www.better-auth.com/)** - Authentication framework 
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database 
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling 
- **[Inngest](https://www.inngest.com/)** - Event-driven workflows and background jobs 
- **[Resend](https://resend.com/)** - Email delivery service 
- **[Finnhub API](https://finnhub.io/)** - Real-time financial data 
- **[Google Gemini AI](https://ai.google.dev/)** - AI-powered insights 
 
### **Development Tools** 
- **ESLint** - Code linting 
- **PostCSS** - CSS processing 
 
## 📋 Prerequisites 
 
Before you begin, ensure you have the following installed: 
 
- [Node.js](https://nodejs.org/) (v18 or higher) 
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) 
- [MongoDB](https://www.mongodb.com/try/download/community) (local or Atlas account) 
- [Git](https://git-scm.com/) 
 
## 🚀 Quick Start 
 
### 1. Clone the Repository 
 
```bash 
git clone https://github.com/yourusername/predictx-stock-tracker-app.git 
cd predictx-stock-tracker-app 
``` 
 
### 2. Install Dependencies 
 
```bash 
npm install 
``` 
 
### 3. Set Up Environment Variables 
 
Create a `.env` file in the root directory: 
 
```env 
NODE_ENV='development' 
NEXT_PUBLIC_BASE_URL=http://localhost:3000 
 
# FINNHUB API 
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here 
FINNHUB_BASE_URL=https://finnhub.io/api/v1 
 
# MONGODB 
MONGODB_URI=your_mongodb_connection_string 
 
# BETTER AUTH 
BETTER_AUTH_SECRET=your_random_secret_key_here 
BETTER_AUTH_URL=http://localhost:3000 
 
# GEMINI AI 
GEMINI_API_KEY=your_gemini_api_key_here 
 
# RESEND (Email Service) 
RESEND_API_KEY=your_resend_api_key_here 
``` 
 
### 4. Get API Keys 
 
#### **Finnhub API Key** 
1. Sign up at [Finnhub.io](https://finnhub.io/) 
2. Get your free API key from the dashboard 
3. Add it to `NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY` 
 
#### **MongoDB Connection String** 
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 
2. Get your connection string 
3. Add it to `MONGODB_URI` 
 
#### **Better Auth Secret** 
Generate a random secret key: 
```bash 
openssl rand -hex 32 
``` 
Add it to `BETTER_AUTH_SECRET` 
 
#### **Gemini API Key** 
1. Get your API key from [Google AI Studio](https://aistudio.google.com/) 
2. Add it to `GEMINI_API_KEY` 
 
#### **Resend API Key** 
1. Sign up at [Resend](https://resend.com/) 
2. Create an API key in the dashboard 
3. Add it to `RESEND_API_KEY` 
 
### 5. Run the Development Server 
 
```bash 
npm run dev 
``` 
 
### 6. Run Inngest (for Background Jobs) 
 
In a separate terminal: 
 
```bash 
npx inngest-cli@latest dev 
``` 
 
### 7. Open Your Browser 
 
Navigate to [http://localhost:3000](http://localhost:3000) 
 
## 📁 Project Structure 
 
``` 
predictx-stock-tracker-app/ 
├── app/ 
│   ├── (auth)/          # Authentication pages (sign-in, sign-up) 
│   ├── (root)/          # Protected dashboard pages 
│   │   ├── page.tsx     # Main dashboard 
│   │   └── stocks/      # Stock detail pages 
│   ├── api/             # API routes 
│   │   └── inngest/     # Inngest webhook 
│   ├── layout.tsx       # Root layout 
│   └── globals.css      # Global styles 
├── components/ 
│   ├── ui/              # Shadcn UI components 
│   ├── Header.tsx       # Navigation header 
│   ├── TradingViewWidget.tsx 
│   └── ... 
├── lib/ 
│   ├── actions/         # Server actions 
│   ├── better-auth/     # Auth configuration 
│   ├── inngest/         # Background job functions 
│   ├── nodemailer/      # Email templates 
│   └── utils.ts 
├── database/ 
│   └── models/          # Mongoose models 
├── hooks/               # React hooks 
├── middleware/          # Next.js middleware 
└── public/              # Static assets 
``` 
 
## 🎯 Key Features Explained 
 
### **Dashboard** 
The main dashboard displays: 
- **Market Overview**: Interactive charts showing market trends 
- **Stock Heatmap**: Visual representation of stock performance 
- **Timeline**: Latest market news and events 
- **Market Quotes**: Real-time stock quotes and data 
 
### **Watchlist & Alerts** 
- Add stocks to your personal watchlist 
- Set custom price alerts (upper/lower bounds) 
- Receive email notifications when alerts trigger 
- Track multiple stocks simultaneously 
 
### **AI-Powered Features** 
- **Welcome Emails**: Personalized onboarding based on user profile 
- **Daily News Summaries**: AI-generated market news digests 
- **Smart Insights**: Context-aware stock analysis 
 
## 🔧 Development 
 
### Available Scripts 
 
```bash 
# Development server 
npm run dev 
 
# Build for production 
npm run build 
 
# Start production server 
npm start 
 
# Lint code 
npm run lint 
``` 
 
### Database Setup 
 
The application uses MongoDB for data storage. Models include: 
- **User** - User accounts and profiles 
- **Watchlist** - User stock watchlists 
- **Alerts** - Price and volume alerts 
 
## 🚢 Deployment 
 
### Vercel (Recommended) 
 
1. Push your code to GitHub 
2. Import the repository in [Vercel](https://vercel.com/) 
3. Add all environment variables 
4. Deploy! 
 
### Environment Variables for Production 
 
Make sure to update: 
- `NEXT_PUBLIC_BASE_URL` to your production URL 
- `BETTER_AUTH_URL` to your production URL 
- All API keys with production credentials 
 
## 📝 License 
 
This project is licensed under the MIT License. 
 
## 🤝 Contributing 
 
Contributions are welcome! Please feel free to submit a Pull Request. 
 
## 📧 Support 
 
For support, email support@predictx.com or open an issue in the repository. 
 
## 🙏 Acknowledgments 
 
- [TradingView](https://www.tradingview.com/) for chart widgets 
- [Finnhub](https://finnhub.io/) for financial data 
- [Shadcn](https://ui.shadcn.com/) for UI components 
- [Better Auth](https://www.better-auth.com/) for authentication 
 
--- 
 
<div align="center"> 
  <p>Made with ❤️ by swaraj ladke</p> 
  <p>© 2025 PredictX. All rights reserved.</p> 
</div>
