from django.db import models

# Create your models here.
class User():
    Username: str
    Full_Name : str
    Email : str
    Gender : str
    DateOfBirth : str
    BloodGroup : str
    health_problems: list
    Blood_Pressure: dict
    Blood_Sugar: list
    Heart_Rate: dict
    urls_prescriptions : dict
    urls_Others : dict
    prescriptions_urls : list
    others_urls : list
    prescriptions_times : list
    others_times : list
    pfile_names : list
    ofile_names : list

    Bp_vals: list
    Bp_keys: list
    Blood_Sugar_keys: list
    cluster_users: list
    cluster_emails: list

class Image():
    img : list
