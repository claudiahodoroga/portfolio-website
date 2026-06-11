# Spotify API Integration Setup Guide

This guide details how to securely connect your Spotify account to your portfolio website. This setup allows displaying what you are listening to **in real time on any device** (desktop, phone, tablet, Alexa, console) and defaults to showing your **last played song** when you are offline.

---

## How It Works

1. **Serverless Proxy**: Vite React runs in the user's browser. Requesting Spotify tokens directly in React would expose your secret credentials. To prevent this, we built a Vercel Serverless Function `/api/spotify.js`.
2. **Secure Credentials**: The function runs securely on the Vercel backend and uses environment variables (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`) to authenticate and retrieve a temporary access token from Spotify.
3. **Data Return**: It queries the Spotify API for currently playing or recently played tracks, returning a clean JSON payload to your widget.

---

## Step 1: Create a Spotify Developer Application

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in with your Spotify account.
2. Click **Create app**.
3. Fill in the details:
   - **App name**: `Portfolio Spotify Widget`
   - **App description**: `Displays live and recently played tracks on my portfolio.`
   - **Redirect URI**: `http://127.0.0.1:5173` (Crucial for Step 2! Note: Spotify has banned `localhost` redirects for new apps, so we must use the IP address `127.0.0.1` instead).
   - **Which APIs/SDKs plan to use?**: Select **Web API** (you can also select Web Playback SDK and Android SDK).
4. Check the terms box and click **Save**.
5. On your App page, click **Settings**.
6. Copy your **Client ID** and click **View client secret** to copy your **Client Secret**. (Keep these safe!).

---

## Step 2: Retrieve your Refresh Token

Since the website queries Spotify automatically without prompting you to log in every time, we need a **Refresh Token** which authorizes the App to fetch your activity indefinitely.

1. Open your browser and navigate to the following URL (replace `YOUR_CLIENT_ID` with the Client ID you copied in Step 1):
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:5173&scope=user-read-currently-playing%20user-read-recently-played
   ```
2. Log in and click **Agree** to authorize your app.
3. Your browser will redirect to a page that looks like it failed (e.g. `http://127.0.0.1:5173/?code=AQD...`).
4. Look at the URL bar and copy the long string of code after `?code=`.
   - *Example: If the URL is `http://127.0.0.1:5173/?code=AQD382A...`, copy `AQD382A...`.*

Now, exchange this temporary code for a Refresh Token. Open your computer's terminal (PowerShell, Command Prompt, or bash) and run the following curl command (replace `CLIENT_ID`, `CLIENT_SECRET`, and `AUTHORIZATION_CODE` with your values):

### In PowerShell (Windows):
```powershell
$clientId = "YOUR_CLIENT_ID"
$clientSecret = "YOUR_CLIENT_SECRET"
$authCode = "YOUR_AUTHORIZATION_CODE"
$pair = "$($clientId):$($clientSecret)"
$bytes = [System.Text.Encoding]::ASCII.GetBytes($pair)
$base64 = [System.Convert]::ToBase64String($bytes)

Invoke-RestMethod -Uri "https://accounts.spotify.com/api/token" -Method Post -Headers @{ Authorization = "Basic $base64" } -Body @{ grant_type = "authorization_code"; code = $authCode; redirect_uri = "http://127.0.0.1:5173" }
```

### In Bash / macOS Terminal / Git Bash:
```bash
curl -H "Authorization: Basic YOUR_BASE64_CLIENTID_CLIENTSECRET" -d grant_type=authorization_code -d code=YOUR_AUTHORIZATION_CODE -d redirect_uri=http://127.0.0.1:5173 https://accounts.spotify.com/api/token
```
*(Alternatively, you can base-64 encode your `clientId:clientSecret` string or use a quick tool like Postman to query the POST token url).*

The API response will return a JSON object. Copy the **`refresh_token`** value (a long string starting with `AQ...`):
```json
{
  "access_token": "BQ...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQ...", // <--- THIS IS YOUR REFRESH TOKEN
  "scope": "user-read-currently-playing user-read-recently-played"
}
```

---

## Step 3: Add Environment Variables to Vercel

When you deploy your project on **Vercel**:

1. Go to your Project settings dashboard on Vercel.
2. Select the **Environment Variables** tab.
3. Add the following three keys and paste your copied values:
   - **`SPOTIFY_CLIENT_ID`**
   - **`SPOTIFY_CLIENT_SECRET`**
   - **`SPOTIFY_REFRESH_TOKEN`**
4. Click **Save** and trigger a redeploy of your portfolio website.

The Spotify Widget will now automatically load your real-time activity, displaying currently playing or recently played tracks!
