export enum Roles{
    ADMIN = "ROLE_ADMIN"
}

export enum MessageType{
    ERROR = "errorMessage",
    SUCCESS = "successMessage",
    INFO = "infoMessage"
}

export enum FormsActiom{
    UPDATE = "udpate",
    CREATE = "create",
    DELETE = "delete"
}

export enum EntityURI{
    PLANS = "api/plans",
    COSTS = "api/costs",
    DAYS = "api/days",
    GROUPS = "api/groups",
    HOTELS = "api/hotels",
    INCLUDE_SERVICS = "api/include_services",
    MEDIA_OBJECTS = "api/media_objects",
    PERSONS = "api/people",
    ROLES = "api/roles",
    SCHEDULES = "api/schedules",
    SEASONS = "api/seasons",
    SERVICES = "api/services",
    TRAVEL_DATES = "api/travel_dates",
    TRAVEL = "api/travels",
    USER = "api/users",
    LOGIN = "login_check",
    PLACES = "api/places",
    TRAVEL_ROUTES = "api/travel_routes"
}

export const Transport = {
    1 : 'Aéreo',
    2 : 'Terrestre'
}