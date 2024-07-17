
# Indian Health Network

Indian Health Network is a Django-based web application that serves as a connecting platform for individuals with similar health conditions. The platform allows users to store prescriptions and bills, input and visualize their vital signs, and connect with others sharing similar health issues.

## UI
![User Dashboard](/workspaces/symptom-sync/frontend/static/communityImg.png)

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

