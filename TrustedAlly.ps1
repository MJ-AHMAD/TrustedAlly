# Define the base directory
$baseDir = "C:\Users\TRUSTEDALLY\ALLY\TRUSTED-ALLY"

# Create the base directory
New-Item -Path $baseDir -ItemType Directory

# Define the folder structure
$folders = @(
    "docs", "src/frontend/public", "src/frontend/src/components", "src/backend/controllers",
    "src/backend/models", "src/backend/routes", "src/backend/services", "config", 
    "scripts", "tests/frontend", "tests/backend", "assets/images", "assets/videos",
    "resources/e-books", "resources/templates", "marketing/campaigns", "marketing/social_media",
    "investments/plans", "investments/reports"
)

# Create the folder structure
foreach ($folder in $folders) {
    New-Item -Path "$baseDir\$folder" -ItemType Directory
}

# Define the files to be created
$files = @(
    "README.md", "LICENSE.md", ".gitignore",
    "docs/overview.md", "docs/mission_vision.md", "docs/strategy_plan.md",
    "docs/user_guides/user_guide_1.md", "docs/user_guides/user_guide_2.md",
    "docs/technical_docs/api_docs/meta_ads_api.md", "docs/technical_docs/api_docs/facebook_group_api.md",
    "docs/technical_docs/api_docs/google_ads_api.md", "docs/technical_docs/api_docs/microsoft_graph_api.md",
    "docs/technical_docs/database_schema.md", "docs/technical_docs/system_architecture.md",
    "src/frontend/public/index.html", "src/frontend/public/styles.css", "src/frontend/src/App.js",
    "src/frontend/src/index.js", "src/frontend/src/components/Header.js", "src/frontend/src/components/Footer.js",
    "src/backend/controllers/userController.js", "src/backend/controllers/apiController.js",
    "src/backend/models/User.js", "src/backend/models/DataModel.js", "src/backend/routes/userRoutes.js",
    "src/backend/routes/apiRoutes.js", "src/backend/services/authService.js", "src/backend/services/apiService.js",
    "src/backend/app.js", "src/backend/server.js", "config/default.json", "config/production.json",
    "scripts/setupDatabase.js", "scripts/deploy.sh", "tests/frontend/App.test.js", 
    "tests/backend/apiController.test.js", "tests/backend/userController.test.js",
    "assets/images/logo.png", "assets/videos/promo_video.mp4", "resources/e-books/education_guide.pdf",
    "resources/templates/marketing_template.html", "marketing/campaigns/campaign_1.md",
    "marketing/social_media/facebook_strategy.md", "marketing/social_media/linkedin_strategy.md",
    "investments/plans/investment_plan_1.md", "investments/reports/quarterly_report_2024_Q1.md"
)

# Create the files
foreach ($file in $files) {
    New-Item -Path "$baseDir\$file" -ItemType File
}

Write-Host "Project structure created successfully at $baseDir"
