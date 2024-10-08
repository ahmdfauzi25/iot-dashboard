## <a name="introduction">💻 IoT Dashboard Light Station</a>

<img src="https://github.com/ahmdfauzi25/iot-dashboard/blob/main/public/home.png" alt="Project Banner">

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [Deploy](#deploy)
   
## <a name="introduction">🤖 Introduction</a>

This project aims to develop a versatile IoT dashboard capable of handling sensor data in real-time. Using technologies like Next.js, TypeScript, Tailwind CSS, Shadcn, Supabase, and Thingsboard, we're building a robust platform for monitoring and managing IoT devices.

## <a name="tech-stack">⚙️ Tech Stack</a>

💎 Next.js

💎 Supabase

💎 Typescript

💎 Tailwind

💎 Shadcn

💎 Thingsboard.

💎 Spline

## <a name="features">🔋 Features</a>

👉 User authentication using Supabase for secure access control.

👉 Real-time display of sensor values on the homepage.

👉 3D visualization of device operations for enhanced user experience.

👉 Configuration section for managing device connections.

👉 Fully responsive design for seamless access across devices.

👉 Integration of Wokwi for simulating IoT ESP32 sensors.

👉 Deployment on Vercel for easy accessibility.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/ahmdfauzi25/iot-dashboard.git
cd iot-dashboard
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named .env.local in the root of your project and add the following content:

```env
# THINGSBOARD
TB_API_URL=
TB_USERNAME=
TB_PASSWORD=
NEXT_PUBLIC_TB_WS_URL=

# SUPABASE
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="deploy">🚀 Deploy</a>

See Online [here](https://weather-station-six.vercel.app/)