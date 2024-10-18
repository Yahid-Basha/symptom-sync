
# Symptom Sync

Symptom Sync is a Django-based web application that serves as a connecting platform for individuals with similar health conditions. The platform allows users to store prescriptions and bills, input and visualize their vital signs, and connect with others sharing similar health issues.

## UI

1) Home page
![1](https://github.com/user-attachments/assets/f74226ad-d96b-4298-8a34-20ba1df14f6f)
![image](https://github.com/user-attachments/assets/84e7c3d9-e2a0-4cd8-ae05-49e2539ecb14)
![3](https://github.com/user-attachments/assets/194fd3f8-f307-4863-bf0a-3a2e59f5d204)

2) Signup page
![Screenshot_17-7-2024_22446_potential-cod-4pqxq95j45q37q9g-8000 app github dev](https://github.com/user-attachments/assets/5af674c9-68a1-4355-b2f5-118a73a5aa41)

3) Login page
![Screenshot_17-7-2024_224128_potential-cod-4pqxq95j45q37q9g-8000 app github dev](https://github.com/user-attachments/assets/c32b76f4-839d-4938-8db8-8b7a4ea9849b)

4) Profile page
![Screenshot_17-7-2024_22452_potential-cod-4pqxq95j45q37q9g-8000 app github dev](https://github.com/user-attachments/assets/77d105da-969a-4e0f-b875-26db8a844d4c)
![Screenshot_17-7-2024_224621_potential-cod-4pqxq95j45q37q9g-8000 app github dev](https://github.com/user-attachments/assets/65139d53-8c9d-48be-838d-68f1d91cb7a3)

## Features

- **User Grouping:** Users are grouped based on similar health conditions.
- **Prescription and Bill Storage:** Users can store their medical prescriptions and bills.
- **Vital Signs Monitoring:** Users can input their blood pressure, blood sugar, weight, and heart rate.
- **Data Visualization:** Vital signs are visualized using graphs to help users track their health trends.

## Technologies Used

- **Django:** For backend development.
- **Firebase:** For authentication, real-time database, and storage.
- **Pyrebase:** A Python wrapper for Firebase.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/indian-health-network.git
    cd indian-health-network
    ```

2. **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Configure Firebase:**
    Update the `firebaseConfig` dictionary in `views.py` with your Firebase project credentials.

5. **Run the Django server:**
    ```bash
    python manage.py runserver
    ```

6. **Access the application:**
    Open your web browser and go to `http://127.0.0.1:8000`.

## Usage

- **Sign Up:** Create a new account by providing your health information.
- **Log In:** Access your profile using your credentials.
- **Profile:** View and update your health conditions, upload prescriptions, and bills.
- **Input Vitals:** Enter your blood pressure, blood sugar, weight, and heart rate.
- **Visualize Data:** View graphical representations of your vital signs over time.

